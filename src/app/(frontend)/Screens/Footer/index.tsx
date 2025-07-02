import Typography from "@/components/ui/Typography";
import fb from '@/assets/images/Fb.png'
import Youtube from '@/assets/images/Youtube.png'
import Linkedin from '@/assets/images/Linkedin.png'
import Instagram from '@/assets/images/Instagram.png'
import SocialIcon from "@/components/SocialIcon";
import X from '@/assets/images/X.png'
import Discord from '@/assets/images/Discord.png'
import { constants } from "@/Contants/constants";


const socialLinks = [
    { icon: fb, label: "Facebook", href: constants.facebook.href },
    { icon: Youtube, label: "YouTube", href: constants.youtube.href },
    { icon: Linkedin, label: "LinkedIn", href: constants.linkedin.href },
    { icon: Instagram, label: "Instagram", href: constants.instagram.href },
    { icon: X, label: "X", href: constants.X.href },
    { icon: Discord, label: "Discord", href: constants.discord.href },
];

const Index = () => {
    return (
        <footer className="max-w-7xl mx-auto padding-y-xl  pb-[0px!important] max-xl:px-6">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:justify-between gap-8">
                    {/* Left: About */}
                    <div className="flex-1 max-w-[580px]">
                        <Typography variant="h6" className="pb-[16px]">Practical Islamic Finance</Typography>
                        <Typography className="pb-[24px]" variant="bodyLargeR">
                            Empowering Muslims to make smarter and effortless personal finance and  investment decisions, aligned with Islamic values.
                        </Typography>
                        <div className="flex gap-[16px]">
                            {socialLinks.map(({ icon, label, href }) => (
                                <SocialIcon key={label} imageSrc={icon} href={href} alt={label} />
                            ))}
                        </div>
                    </div>

                    {/* Mobile: Side by side, Desktop: Separate columns */}
                    <div className="flex md:contents gap-8">
                        {/* Center: Features */}
                        <div className="flex-1 md:max-w-[180px]">
                            <ul className="space-y-2">
                                <li className="font-semibold">Features</li>
                                <li className="font-semibold">Halal Reports</li>
                                <li className="font-semibold">Why PIF</li>
                                <li className="font-semibold">Testimonials</li>
                                <li className="font-semibold">Pricing</li>
                                <li className="font-semibold">FAQ</li>
                            </ul>
                        </div>

                        {/* Right: Disclaimer */}
                        <div className="flex-1 md:max-w-[180px]">
                            <ul className="space-y-2">
                                <li className="font-semibold">Disclaimer</li>
                                <li className="font-semibold">Terms &amp; Conditions</li>
                                <li className="font-semibold">Cookie Policy</li>
                                <li className="font-semibold">Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <hr className="mt-8 border-t border-neutral-20" />
                <div className="text-center py-4 text-lg">
                    Copyright © 2025 Practical Islamic Finance. All right reserved
                </div>
            </div>
        </footer>
    );
};

export default Index;