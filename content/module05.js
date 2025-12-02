// Module 05 Content
// Extracted from 05_Awareness_Safety.html

export function getContent() {
  return `<!-- Section Title -->
        <section class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900" data-lang-key="title">05. Awareness &amp; Safety</h1>
            <p class="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto" data-lang-key="subtitle">
                Knowledge of data privacy, security concerns, and the ethical implications of AI.
            </p>
        </section>

        <!-- 1. "Free" Isn't Free: Data as Fuel -->
        <section class="bg-white shadow-lg rounded-2xl overflow-hidden mb-16">
            <div class="md:flex">
                <!-- Visual Placeholder -->
                <div class="md:w-1/2">
                    <img src="https://placehold.co/600x400/fff7ed/ea580c?text=Your+Data+is+the+Fuel" alt="Illustration of data fueling an AI brain" class="w-full h-64 md:h-full object-cover">
                </div>
                <!-- Content -->
                <div class="md:w-1/2 p-6 md:p-10">
                    <h2 class="text-3xl font-bold text-orange-600 mb-4" data-lang-key="s1_title">"Free" Isn't Free: Your Data is the Fuel</h2>
                    <p class="text-gray-700 mb-4" data-lang-key="s1_p1">
                        Most "free" AI models are not free. You pay with your data. Every prompt you enter, every question you ask, and every document you upload can be used to further train the model.
                    </p>
                    <p class="text-gray-700" data-lang-key="s1_p2">
                        This is the most important rule of AI safety: <strong>Do not enter any information into an AI that you would not want posted on a public billboard.</strong> This includes personal secrets, company data, or private information about others.
                    </p>
                </div>
            </div>
        </section>
        
        <!-- 2. Key Privacy & Security Risks -->
        <section class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-4" data-lang-key="s2_title">Key Privacy &amp; Security Risks</h2>
            <p class="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto" data-lang-key="s2_subtitle">
                Using AI introduces new challenges. Here are the most critical ones to be aware of.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <!-- Data Collection -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        </span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_item1_title">Your Prompts as Data</h3>
                    </div>
                    <p class="text-gray-700" data-lang-key="s2_item1_desc">Companies often store your conversations to review and improve their AI. Assume that human reviewers might read your chats. Never include passwords, social security numbers, or private medical details.</p>
                </div>

                <!-- AI-Powered Phishing -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path></svg>
                        </span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_item2_title">AI-Powered Phishing</h3>
                    </div>
                    <p class="text-gray-700" data-lang-key="s2_item2_desc">Scammers use AI to write perfectly fluent, personalized emails that are much harder to detect than old, typo-filled scam messages. They can also clone voices to impersonate family members in phone calls.</p>
                </div>

                <!-- Deepfakes -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_item3_title">Deepfakes &amp; Disinformation</h3>
                    </div>
                    <p class="text-gray-700" data-lang-key="s2_item3_desc">AI can create realistic but fake videos and audio of people saying or doing things they never did. This can be used to spread political disinformation, commit fraud, or create fake celebrity scandals.</p>
                </div>
                
            </div>
        </section>

        <!-- 3. Big Ethical Questions -->
        <section class="bg-white shadow-lg rounded-2xl p-6 md:p-10 mb-16">
            <h2 class="text-3xl font-bold text-center mb-4" data-lang-key="s3_title">Big Ethical Questions</h2>
            <p class="text-center text-lg text-gray-600 mb-8 max-w-3xl mx-auto" data-lang-key="s3_p1">
                AI is forcing society to ask difficult questions with no easy answers. Being aware of these debates is a key part of AI literacy.
            </p>
            <div class="space-y-6">
                <!-- Copyright & Ownership -->
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-semibold mb-2" data-lang-key="s3_item1_title">Copyright &amp; Ownership</h3>
                    <p class="text-gray-700" data-lang-key="s3_item1_desc">If an AI is trained on millions of copyrighted images from artists, who owns the new image it creates? Is it a new piece of art, or is it a form of theft? These questions are currently being decided in courts.</p>
                </div>
                <!-- Job Displacement -->
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-semibold mb-2" data-lang-key="s3_item2_title">Job Displacement</h3>
                    <p class="text-gray-700" data-lang-key="s3_item2_desc">AI can now perform tasks that were once safe for humans (writing, coding, design). This will likely change many jobs, removing some while creating new ones (like "Prompt Engineer"). How do we support workers through this transition?</p>
                </div>
                <!-- Algorithmic Fairness -->
                <div class="bg-gray-50 p-6 rounded-lg">
                    <h3 class="text-xl font-semibold mb-2" data-lang-key="s3_item3_title">Algorithmic Fairness</h3>
                    <p class="text-gray-700" data-lang-key="s3_item3_desc">If an AI is trained on historical data, it will learn historical biases. For example, an AI system trained on past loan applications might unfairly deny loans to people in certain neighborhoods, even if they are qualified.</p>
                </div>
            </div>
        </section>
        
        <!-- 4. Your Digital Safety Checklist -->
        <section class="mb-12">
            <h2 class="text-3xl font-bold text-center mb-10" data-lang-key="s4_title">Your Digital Safety Checklist</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- The Do's -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
                    <h3 class="flex items-center text-2xl font-bold text-green-700 mb-4">
                        <svg class="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span data-lang-key="s4_dos_title">The Do's</span>
                    </h3>
                    <ul class="list-disc list-inside space-y-3 text-gray-700">
                        <li data-lang-key="s4_dos_li1"><strong>Think Before You Type:</strong> Assume a stranger will read your prompt.</li>
                        <li data-lang-key="s4_dos_li2"><strong>Be Skeptical:</strong> Question urgent emails or calls, even if they sound real. Verify through a separate channel.</li>
                        <li data-lang-key="s4_dos_li3"><strong>Check Privacy Settings:</strong> Many AI tools now have an option to "opt-out" of using your data for training. Use it.</li>
                        <li data-lang-key="s4_dos_li4"><strong>Anonymize Data:</strong> If you need to analyze data, replace real names and sensitive numbers with fake placeholders first.</li>
                    </ul>
                </div>
                <!-- The Don'ts -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                    <h3 class="flex items-center text-2xl font-bold text-red-700 mb-4">
                        <svg class="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span data-lang-key="s4_donts_title">The Don'ts</span>
                    </h3>
                    <ul class="list-disc list-inside space-y-3 text-gray-700">
                        <li data-lang-key="s4_donts_li1"><strong>Don't Share Secrets:</strong> Never paste confidential company memos, internal strategies, or personal diaries.</li>
                        <li data-lang-key="s4_donts_li2"><strong>Don't Upload Sensitive Files:</strong> Do not upload documents containing financial records, unpublished research, or private legal contracts.</li>
                        <li data-lang-key="s4_donts_li3"><strong>Don't Trust, Verify:</strong> Don't trust an AI-generated link, legal advice, or medical diagnosis. Always check with a real expert.</li>
                    </ul>
                </div>
            </div>
        </section>`;
}

// Export default for convenience
export default getContent;
