export default function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-900 py-16">
            <div className="container max-w-[1200px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-900">Nicolas Bolt</h3>
                        <p className="text-gray-600">Brownsburg, IN 46112</p>
                        
                        {/* Social Icons */}
                        <div className="flex space-x-4 pt-4">
                            <a href="https://www.linkedin.com/in/nicolas-bolt-59a523131/" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="https://github.com/nicolasbolt" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Service Areas */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900">Service Areas</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li><a href="/service-areas/indianapolis-web-design" className="hover:text-gray-900 transition-colors">Indianapolis</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Brownsburg</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Avon</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Zionsville</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Westfield</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Carmel</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Fishers</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900">Services</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li><a href="/services/pressure-washing-web-design-indianapolis/" className="hover:text-gray-900 transition-colors">Pressure Washing Web Design</a></li>
                            <li><a href="/services/roofing-web-design-indianapolis/" className="hover:text-gray-900 transition-colors">Roofing Web Design</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Pest Control Web Design</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Construction Web Design</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Landscaping Web Design</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Pool Company Web Design</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Painting Company Web Design</a></li>
                        </ul>
                    </div>

                    {/* More About Me */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-gray-900">More About Me</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li><a href="/about" className="hover:text-gray-900 transition-colors">About Me</a></li>
                            <li><a href="/services" className="hover:text-gray-900 transition-colors">What I Do</a></li>
                            {/* <li><a href="#" className="hover:text-gray-900 transition-colors">Testimonials</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}