import React from 'react';
import { footerData } from '../../data/footerData';

type Variant = 'row' | 'col';
type ColorVariant = 'light' | 'dark';

interface DownloadAppLinksProps {
    variant?: Variant;
    colorVariant?: ColorVariant;
    custom_gap?: string;
    className?: string;
}

/* icon sizes live here — they're presentation, not content */
const ICON_SIZES: Record<string, { w: string; h: string }> = {
    'App Store': { w: '26.36px', h: '31.89px' },
    'Google Play': { w: '29.32px', h: '32.15px' },
};

const DownloadAppLinks: React.FC<DownloadAppLinksProps> = ({
    variant = 'col',
    colorVariant = 'dark',
    custom_gap = '12px',
    className = '',
}) => {
    const { badges } = footerData.downloadApp;

    const isLight = colorVariant === 'light';

    /* "row" variant → column on mobile, row from sm and up */
    const directionClasses =
        variant === 'row'
            ? 'flex-col sm:flex-row'
            : 'flex-col';

    return (
        <div
            className={[
                'flex',
                directionClasses,
                className,
            ].join(' ')}
            style={{ gap: custom_gap }}
        >
            {badges.map((badge) => {
                const size = ICON_SIZES[badge.label] ?? { w: 'auto', h: '32px' };

                return (
                    <div
                        key={badge.id}
                        className={[
                            'w-[171.43px] h-[50px] rounded-sm border',
                            isLight
                                ? 'bg-white text-black border-gray-200'
                                : 'bg-black text-white border-black',
                        ].join(' ')}
                        style={{ paddingInline: '7.25px', paddingTop: '9.29px' }}
                    >
                        <a
                            href={badge.href}
                            aria-label={badge.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 transition-opacity hover:opacity-90"
                        >
                            {/* Icon — swaps based on variant */}
                            <img
                                src={isLight ? badge.imageBlack : badge.image}
                                alt={badge.label}
                                style={{ width: size.w, height: size.h }}
                                className="object-contain shrink-0"
                            />

                            {/* Text — right */}
                            <div className="flex flex-col leading-tight">
                                <span className="text-[9px] uppercase tracking-wide">
                                    {badge.title}
                                </span>
                                <h5>
                                    {badge.label}
                                </h5>
                            </div>
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default DownloadAppLinks;