import { cn } from "@/lib/utils"
import { Dialog, Disclosure } from "@headlessui/react"
import { ChatBubbleLeftIcon, ChevronDownIcon, PaperAirplaneIcon } from "@heroicons/react/20/solid"
import { HomeIcon, PhoneIcon, PlayCircleIcon, X } from "lucide-react"
import { useState } from "react";

const products = [
    {
        name: "Book a Stay",
        description: "Get a better understanding of your traffic",
        href: "#",
        icon: HomeIcon

    },
    {
        name: "Book a Flight",
        description: "Speak directly to your customerss",
        href: "#",
        icon: PaperAirplaneIcon
    },
    {
        name: "Contact our Support Team",
        description: "Your customers' data will be safe and secure",
        href: "#",
        icon: ChatBubbleLeftIcon
    },
];

const callToAction = [{ name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
{ name: "Contact Support", href: "#", icon: PhoneIcon }];

function SideBar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div>
            <Dialog as="div" className={"lg:hidden"} open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#18499df5] px-6 py-6 sm:max-w-sm sm:ring-1">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">CheckInn.com</span>
                            <img src="/images/check.jpg" alt="Logo" className="h-15 w-auto rounded-md border-none" />
                        </a>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-white" onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open, }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items.center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-blue-800">
                                                Stays
                                                <ChevronDownIcon className={cn(open ? "rotate-180" : "", "h-5 w-5 flex-none")} aria-hidden="true" />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...products, ...callToAction].map((item) => (
                                                    <Disclosure.Button key={item.name} as="a" href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-blue-800">
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800">Flights</a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800">Car Rentals</a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800">Attractions</a>
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800">Flight + Hotel</a>
                            </div>
                            <div className="py-6">
                                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800">Log In</a>
                            </div>

                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </div>
    )
}
export default SideBar