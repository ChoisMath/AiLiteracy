// Module 04 Content
// Extracted from 04_practical_integration.html

export function getContent() {
  return `<!-- Section Title -->
        <section class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900" data-lang-key="title">04. Practical Integration</h1>
            <p class="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto" data-lang-key="subtitle">
                Incorporating AI into workflows and learning processes effectively, and citing AI properly.
            </p>
        </section>

        <!-- 1. AI in Your Daily Workflow -->
        <section class="bg-white shadow-lg rounded-2xl overflow-hidden mb-16">
            <div class="md:flex">
                <!-- Visual Placeholder -->
                <div class="md:w-1/2">
                    <img src="https://placehold.co/600x400/eef2ff/4338ca?text=AI+in+Your+Workflow" alt="Illustration of AI integrated into a computer workflow" class="w-full h-64 md:h-full object-cover">
                </div>
                <!-- Content -->
                <div class="md:w-1/2 p-6 md:p-10">
                    <h2 class="text-3xl font-bold text-indigo-600 mb-4" data-lang-key="s1_title">AI in Your Daily Workflow</h2>
                    <p class="text-gray-700 mb-4" data-lang-key="s1_p1">
                        Practical integration means moving beyond just "playing" with AI and strategically using it to enhance your productivity, creativity, and learning.
                    </p>
                    <p class="text-gray-700" data-lang-key="s1_p2">
                        It's about identifying tasks where AI can be a powerful assistant, not a replacement for your own thinking. The goal is to automate the tedious parts of your work so you can focus on the creative and critical parts.
                    </p>
                </div>
            </div>
        </section>
        
        <!-- 2. Real-World Scenarios -->
        <section class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-4" data-lang-key="s2_title">Real-World Scenarios</h2>
            <p class="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto" data-lang-key="s2_subtitle">
                AI can wear many hats. Think of it as a specialist you can call on for specific tasks.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <!-- Writing Assistant -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                        </span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_item1_title">As a Writing Assistant</h3>
                    </div>
                    <p class="text-gray-700" data-lang-key="s2_item1_desc">Use AI to brainstorm outlines, overcome writer's block, generate first drafts, improve your grammar, or rephrase a paragraph in a different tone (e.g., "make this more professional").</p>
                </div>

                <!-- Coding Partner -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        </span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_item2_title">As a Coding Partner</h3>
                    </div>
                    <p class="text-gray-700" data-lang-key="s2_item2_desc">Use AI to explain a complex piece of code, translate code from one language to another, write boilerplate functions, or find bugs (debug) in your script.</p>
                </div>

                <!-- Brainstorming Tool -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M12 21v-1"></path></svg>
                        </span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_item3_title">As a Brainstorming Tool</h3>
                    </div>
                    <p class="text-gray-700" data-lang-key="s2_item3_desc">Stuck for an idea? Ask an AI to act as a creative partner. "Give me 10 ideas for a marketing campaign for a new coffee shop" or "What are some counter-arguments to this thesis statement?"</p>
                </div>
                
                <!-- Personalized Tutor -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253"></path></svg>
                        </span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_item4_title">As a Personalized Tutor</h3>
                    </div>
                    <p class="text-gray-700" data-lang-key="s2_item4_desc">Use AI to learn at your own pace. "Explain quantum physics to me like I'm a 10-year-old" or "Quiz me on the main causes of World War I" or "Teach me 10 basic phrases in Japanese."</p>
                </div>
            </div>
        </section>

        <!-- 3. The Importance of Citing AI -->
        <section class="bg-white shadow-lg rounded-2xl p-6 md:p-10 mb-16">
            <h2 class="text-3xl font-bold text-center mb-4" data-lang-key="s3_title">The Importance of Citing AI</h2>
            <p class="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto" data-lang-key="s3_p1">
                Just as you cite books, articles, and websites, you must cite AI when you use its ideas, text, or data. This is a core part of academic and professional integrity.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Why Cite? -->
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-semibold mb-3" data-lang-key="s3_why_title">Why Cite AI?</h3>
                    <ul class="list-disc list-inside text-gray-700 space-y-2">
                        <li data-lang-key="s3_why_li1"><strong>Transparency:</strong> It shows your audience (like a professor or a boss) exactly what parts of the work are yours and what parts were assisted by AI.</li>
                        <li data-lang-key="s3_why_li2"><strong>Accountability:</strong> Since AI can hallucinate, citing it shows you are aware of the source and allows others to trace the origin of the information.</li>
                        <li data-lang-key="s3_why_li3"><strong>Honesty:</strong> It is dishonest to pass off AI-generated text as your own original thought.</li>
                    </ul>
                </div>
                <!-- How to Cite? -->
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-semibold mb-3" data-lang-key="s3_how_title">How to Cite AI (Examples)</h3>
                    <p class="text-gray-700 mb-4" data-lang-key="s3_how_p1">Citation styles are evolving. Always follow your institution's specific guidelines. Here are common formats:</p>
                    <div class="mb-4">
                        <strong class="text-gray-800">MLA 9 Style:</strong>
                        <p class="text-gray-700 text-sm italic bg-gray-200 p-2 rounded">"Description of prompt" prompt. [Name of AI model], [Date of prompt], [Name of company].</p>
                    </div>
                    <div>
                        <strong class="text-gray-800">APA 7 Style:</strong>
                        <p class="text-gray-700 text-sm italic bg-gray-200 p-2 rounded">[Company]. (Year). *[Name of AI model]* (Large language model). https://www.ibm.com/think/topics/ai-model</p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- 4. Effective vs. Ineffective Workflows -->
        <section class="mb-12">
            <h2 class="text-3xl font-bold text-center mb-10" data-lang-key="s4_title">Effective vs. Ineffective Workflows</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Effective -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
                    <h3 class="flex items-center text-2xl font-bold text-green-700 mb-4">
                        <svg class="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span data-lang-key="s4_eff_title">Effective Integration</span>
                    </h3>
                    <ul class="list-disc list-inside space-y-3 text-gray-700">
                        <li data-lang-key="s4_eff_li1"><strong>Human-in-the-Loop:</strong> You are the director, the AI is the assistant.</li>
                        <li data-lang-key="s4_eff_li2"><strong>AI as a Springboard:</strong> Use AI to generate a first draft or ideas, then take over to add your unique voice, insights, and facts.</li>
                        <li data-lang-key="s4_eff_li3"><strong>Automating Tedium:</strong> Use AI for tasks that drain your time, like formatting data, writing simple emails, or summarizing meeting notes.</li>
                    </ul>
                </div>
                <!-- Ineffective -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                    <h3 class="flex items-center text-2xl font-bold text-red-700 mb-4">
                        <svg class="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span data-lang-key="s4_ineff_title">Ineffective Integration</span>
                    </h3>
                    <ul class="list-disc list-inside space-y-3 text-gray-700">
                        <li data-lang-key="s4_ineff_li1"><strong>Human-out-of-the-Loop:</strong> Copying and pasting AI output without reading, verifying, or editing it.</li>
                        <li data-lang-key="s4_ineff_li2"><strong>AI as a Crutch:</strong> Relying on AI to do all the creative and critical thinking, leading to skill erosion.</li>
                        <li data-lang-key="s4_ineff_li3"><strong>Inappropriate Use:</strong> Using AI for tasks that require genuine human empathy, personal reflection, or sensitive decision-making.</li>
                    </ul>
                </div>
            </div>
        </section>`;
}

// Export default for convenience
export default getContent;
