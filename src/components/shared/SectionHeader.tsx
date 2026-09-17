import { ArrowRightIcon } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";

interface SectionHeaderProps {
    headerText: string;
    linkText?: string;
    linkHerf: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ headerText, linkText = 'View All', linkHerf = '/' }) => {
    return (
        <div className="flex justify-between items-end">
            <h2 className="max-w-[431px]">
                {headerText}
            </h2>

            <Link className="link_style flex gap-2" to={linkHerf}>
                <span>
                    {linkText}
                </span>

                <ArrowRightIcon className="w-6 h6"/>
            </Link>
        </div>
    )
}

export default SectionHeader