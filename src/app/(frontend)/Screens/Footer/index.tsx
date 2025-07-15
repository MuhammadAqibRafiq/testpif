import Typography from "@/components/ui/Typography";
import fb from '@/assets/images/Fb.png'
import Youtube from '@/assets/images/Youtube.png'
import Linkedin from '@/assets/images/Linkedin.png'
import Instagram from '@/assets/images/Instagram.png'
import SocialIcon from "@/components/SocialIcon";
import X from '@/assets/images/X.png'
import Discord from '@/assets/images/Discord.png'
import { constants } from "@/Contants/constants";
import Link from "next/link";
import { Podcast } from "lucide-react";


const socialLinks = [
    // { icon: fb, label: "Facebook", href: constants.facebook.href , type: 'img' },
    { icon: Youtube, label: "YouTube", href: constants.youtube.href, type: 'img' },
    // { icon: Linkedin, label: "LinkedIn", href: constants.linkedin.href , type: 'img' },
    // { icon: Instagram, label: "Instagram", href: constants.instagram.href , type: 'img' },
    { icon: X, label: "X", href: constants.X.href, type: 'img' },
    // { icon: Discord, label: "Discord", href: constants.discord.href , type: 'img' },
    { icon: <Podcast height={24} width={24} color="white" aria-label="Podcast link" />, label: "Podcast", href: constants.podcast.href, type: 'icon' },
];

const footerLinks = [
    { label: 'Disclaimer', href: constants.disclaimer.href, target: '_blank', rel: 'noopener noreferrer' },
    { label: 'Terms & Conditions', href: constants.terms.href, target: '_blank', rel: 'noopener noreferrer' },
    { label: 'Cookie Policy', href: constants.cookie.href, target: '_blank', rel: 'noopener noreferrer' },
    { label: 'Privacy Policy', href: constants.privacy.href, target: '_blank', rel: 'noopener noreferrer' },
];

const reportLinks = [
    { label: 'Stock Reports', href: constants.stocksReports.href, target: '_blank', rel: 'noopener noreferrer' },
    { label: 'Crypto Reports', href: constants.cryptoReports.href, target: '_blank', rel: 'noopener noreferrer' },
    { label: 'Pricing', href: constants.pricing.href, target: '_blank', rel: 'noopener noreferrer' },
];

const Index = () => {
    return (
        <footer className="max-w-7xl mx-auto padding-y-xl  pb-[0px!important] max-xl:px-6">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:justify-between gap-8">
                    {/* Left: About */}
                    <div className="flex-1 max-w-[580px]">
                        <Typography variant="displayMedium" className="pb-[16px] text-neutral-100">Practical Islamic Finance</Typography>
                        <Typography className="pb-[24px] text-neutral-100" variant="bodyMediumR">
                            Empowering Muslims to easily make smarter personal finance and investment decisions, aligned with Islamic values.
                        </Typography>
                        <div className="flex gap-[16px]">
                            {socialLinks.map(({ icon, label, href, type }) => (
                                <SocialIcon key={label} imageSrc={icon} href={href} alt={label} type={type} />
                            ))}
                        </div>
                    </div>

                    {/* Mobile: Side by side, Desktop: Separate columns */}
                    <div className="flex md:contents gap-8">
                        {/* Center: Features */}
                        <div className="flex-1 md:max-w-[180px]">
                            <ul className="space-y-2">
                                {reportLinks.map(link => (
                                    <li className="font-semibold text-[14px] text-neutral-100" key={link.label}>
                                        <Link href={link.href} target={link.target} rel={link.rel} className="underline-animate cursor-pointer">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Disclaimer */}
                        <div className="flex-1 md:max-w-[180px]">
                            <ul className="space-y-2">
                                {footerLinks.map(link => (
                                    <li className="font-semibold text-[14px] text-neutral-100" key={link.label}>
                                        <Link href={link.href} target={link.target} rel={link.rel} className="underline-animate cursor-pointer">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


                <hr className="mt-8 border-t border-neutral-20" />
                <div className="text-center py-4 text-lg text-neutral-100">
                    Copyright © 2025 Practical Islamic Finance. All right reserved
                </div>
            </div>
        </footer>
    );
};

export default Index;