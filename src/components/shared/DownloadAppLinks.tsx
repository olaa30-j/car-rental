import React from 'react';
import { footerData } from '../../data/footerData';

type Variant = 'row' | 'col';

interface DownloadAppLinksProps {
    variant?: Variant;
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
    custom_gap = '12px',
    className = '',
}) => {
    const { badges } = footerData.downloadApp;

    return (
        <div
            className={[
                'flex',
                variant === 'row' ? 'flex-row' : 'flex-col',
                className,
            ].join(' ')}
            style={{ gap: custom_gap }}
        >
            {badges.map((badge) => {
                const size = ICON_SIZES[badge.label] ?? { w: 'auto', h: '32px' };

                return (
                    <div 
                        className='bg-black w-[171.43px] h-[50px] rounded-sm'   
                        style={{paddingInline: '7.25px', paddingTop: '9.29px' }}
                    >
                        <a
                            key={badge.id}
                            href={badge.href}
                            aria-label={badge.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 text-white transition-opacity hover:opacity-90"
                        >
                            {/* Icon — left */}
                            <img
                                src={badge.image}
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