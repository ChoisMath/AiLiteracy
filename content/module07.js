// Module 07 Content
// Extracted from 07_social_ompact.html

export function getContent() {
  return `<!-- Section Title -->
        <section class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900" data-lang-key="title">
                07. Societal &amp; Environmental Impact
            </h1>
            <p class="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto" data-lang-key="subtitle">
                Understanding AI's large-scale effects on society, jobs, and our planet.
            </p>
        </section>

        <!-- 1. The Big Picture: AI as a Societal Force -->
        <section class="bg-white shadow-lg rounded-2xl overflow-hidden mb-16">
            <div class="md:flex">
                <!-- Visual Placeholder -->
                <div class="md:w-1/2">
                    <img
                        src="https://placehold.co/600x400/f3e8ff/7e22ce?text=AI+and+Society"
                        alt="Illustration of AI connecting with a globe and society"
                        class="w-full h-64 md:h-full object-cover"
                    />
                </div>
                <!-- Content -->
                <div class="md:w-1/2 p-6 md:p-10">
                    <h2 class="text-3xl font-bold text-purple-600 mb-4" data-lang-key="s1_title">
                        The Big Picture: AI as a Societal Force
                    </h2>
                    <p class="text-gray-700 mb-4" data-lang-key="s1_p1">
                        AI is not just a personal tool. It's a foundational technology, like the printing press or the internet, that will fundamentally change how our society operates.
                    </p>
                    <p class="text-gray-700" data-lang-key="s1_p2">
                        Understanding its impact goes beyond your own workflow. It requires thinking like a citizen, considering the large-scale effects on our economy, culture, and environment. This is the final, and perhaps most important, piece of AI literacy.
                    </p>
                </div>
            </div>
        </section>
        
        <!-- 2. Key Societal Impacts -->
        <section class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-4" data-lang-key="s2_title">
                Key Societal Impacts
            </h2>
            <p class="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto" data-lang-key="s2_subtitle">
                AI is creating powerful new opportunities, but also significant challenges that we must navigate as a society.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <!-- Future of Jobs -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                ></path>
                            </svg>
                        </span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_item1_title">
                            Future of Jobs &amp; Economy
                        </h3>
                    </div>
                    <p class="text-gray-700" data-lang-key="s2_item1_desc">
                        AI will automate many tasks, changing roles from graphic design to law. This will displace some jobs but also create new ones (like AI trainers or ethicists). The challenge is ensuring a "just transition" for the workforce.
                    </p>
                </div>

                <!-- Information & Truth -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6M7 8h6"
                                ></path>
                            </svg>
                        </span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_item2_title">
                            Information &amp; Truth
                        </h3>
                    </div>
                    <p class="text-gray-700" data-lang-key="s2_item2_desc">
                        When AI can create realistic fake news, images, and videos (deepfakes) instantly, how do we know what is real? AI-powered disinformation can influence elections, polarize society, and erode trust in media.
                    </p>
                </div>

                <!-- Equity & Fairness -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2M9 12a3 3 0 11-6 0 3 3 0 016 0zm12 0a3 3 0 11-6 0 3 3 0 016 0z"
                                ></path>
                            </svg>
                        </span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_item3_title">
                            Equity &amp; Fairness
                        </h3>
                    </div>
                    <p class="text-gray-700" data-lang-key="s2_item3_desc">
                        AI is trained on human data, which contains human biases. If not corrected, AI can amplify these biases in hiring (favoring men) or law enforcement (discriminating against minorities). This is "algorithmic bias."
                    </p>
                </div>
                
            </div>
        </section>

        <!-- 3. The Environmental Footprint -->
        <section class="bg-white shadow-lg rounded-2xl p-6 md:p-10 mb-16">
            <h2 class="text-3xl font-bold text-center mb-4" data-lang-key="s3_title">
                The Environmental Footprint
            </h2>
            <p class="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto" data-lang-key="s3_p1">
                AI is not magic. It runs on massive computer servers in huge data centers. This has a real-world environmental cost.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Energy Consumption -->
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-semibold mb-3" data-lang-key="s3_item1_title">
                        Energy Consumption
                    </h3>
                    <p class="text-gray-700" data-lang-key="s3_item1_desc">
                        Training a single large AI model (like GPT-4) can consume as much electricity as hundreds of homes for an entire year. Every prompt you send also requires energy to process.
                    </p>
                </div>
                <!-- Carbon Footprint & Water Use -->
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-semibold mb-3" data-lang-key="s3_item2_title">
                        Carbon Footprint &amp; Water Use
                    </h3>
                    <p class="text-gray-700" data-lang-key="s3_item2_desc">
                        This energy consumption translates to a large carbon footprint. Data centers also use millions of gallons of fresh water for cooling, which can strain local water supplies.
                    </p>
                </div>
            </div>
            <p class="text-center text-md text-gray-600 mt-6" data-lang-key="s3_p2">
                This doesn't mean AI is "bad," but it means we must be mindful. The push for <strong>"Green AI"</strong>—designing smaller, more efficient models—is a critical part of its future development.
            </p>
        </section>
        
        <!-- 4. Your Role as a Digital Citizen -->
        <section class="mb-12">
            <h2 class="text-3xl font-bold text-center mb-10" data-lang-key="s4_title">
                Your Role as a Digital Citizen
            </h2>
            <p class="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto" data-lang-key="s4_subtitle">
                You are not just a user; you are a citizen in a world with AI. You have a voice and a responsibility.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Be Informed -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-purple-500">
                    <h3 class="flex items-center text-2xl font-bold text-purple-700 mb-4">
                        <svg class="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6M7 8h6"
                            ></path>
                        </svg>
                        <span data-lang-key="s4_item1_title">Be Informed</span>
                    </h3>
                    <p class="text-gray-700" data-lang-key="s4_item1_desc">
                        Pay attention to how AI is being used in your community and country. Read about new laws and regulations. Understand the big picture.
                    </p>
                </div>
                <!-- Advocate for Good -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
                    <h3 class="flex items-center text-2xl font-bold text-green-700 mb-4">
                        <svg class="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.084-1.284-.24-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.084-1.284.24-1.857M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 6c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4z"
                            ></path>
                        </svg>
                        <span data-lang-key="s4_item2_title">Advocate for Good</span>
                    </h3>
                    <p class="text-gray-700" data-lang-key="s4_item2_desc">
                        Support companies and policies that prioritize ethical AI, transparency, and fairness. Question AI systems that seem unfair or opaque.
                    </p>
                </div>
                <!-- Be Mindful -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-yellow-500">
                    <h3 class="flex items-center text-2xl font-bold text-yellow-700 mb-4">
                        <svg class="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8C10.89 8 9.92.402 9.401 1M12 21a9 9 0 100-18 9 9 0 000 18z"
                            ></path>
                        </svg>
                        <span data-lang-key="s4_item3_title">Be Mindful</span>
                    </h3>
                    <p class="text-gray-700" data-lang-key="s4_item3_desc">
                        Be conscious of your own AI use. Is this task truly necessary? Could a simpler tool (or no tool) work? Acknowledge the environmental cost of convenience.
                    </p>
                </div>
            </div>
        </section>`;
}

// Export default for convenience
export default getContent;
