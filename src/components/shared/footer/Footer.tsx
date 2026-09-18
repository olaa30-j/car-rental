import { footerData } from "../../../data/footerData";
import ContactList from "../ContactItem ";
import DownloadAppLinks from "../DownloadAppLinks";
import Logo from "../Logo"

const Footer = () => {
    const { contact, brand, linkGroups, socials, downloadApp, copyright } = footerData;

    return (
        <section>
            <div className="container flex flex-col gap-[60px]">
                {/* ─── Top: contact info ─── */}
                <div className="flex flex-col justify-between md:flex-row gap-4">
                    <div className="md:w-1/4">
                        <Logo />
                    </div>
                    <ContactList
                        items={contact}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 md:w-3/4"
                    />
                </div>

                {/* ─── Main grid ─── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[minmax(280px,1fr)_repeat(3,180px)] gap-8 lg:gap-10">

                    {/* Brand + socials */}
                    <div className="flex flex-col gap-4">
                        <h5 className="leading-relaxed max-w-[280px]">
                            {brand.description}
                        </h5>
                        <div className="flex gap-2 mt-2">
                            {socials.map((s) => (
                                <a
                                    key={s.id}
                                    href={s.href}
                                    aria-label={s.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 hover:bg-gray-800 transition-colors"
                                >
                                    <img
                                        src={s.image}
                                        alt={s.label}
                                        className="w-4 h-4 object-contain"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link groups */}
                    {linkGroups.map((group) => (
                        <div key={group.id}>
                            <h5 style={{ marginBottom: '24px' }}>
                                {group.title}
                            </h5>
                            <ul className="flex flex-col gap-2">
                                {group.links.map((link) => (
                                    <li key={link.id}>
                                        <a
                                            href={link.href}
                                            className="hover:text-secondary leading-[26px]"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Download app */}
                    <div>
                        <h5 className="font-bold text-gray-900 text-lg" style={{ marginBottom: '24px' }}>
                            {downloadApp.title}
                        </h5>

                        <DownloadAppLinks
                            variant="col"
                            custom_gap="24px"
                        />
                    </div>
                </div>

                {/* ─── Copyright ─── */}
                <div className="text-sm text-gray-500 text-center">
                    {copyright}
                </div>
            </div>
        </section>
    )
}

export default Footer