// Module 03 Content
// Extracted from 03_Mindful_Evaluation.html

export function getContent() {
  return `<!-- Section Title -->
        <section class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900" data-lang-key="title">03. Mindful Evaluation &amp; Meta-Learning</h1>
            <p class="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto" data-lang-key="subtitle">
                Critical thinking about AI outputs and reflecting on how AI shapes our learning.
            </p>
        </section>

        <!-- 1. Don't Trust, Verify -->
        <section class="bg-white shadow-lg rounded-2xl overflow-hidden mb-16">
            <div class="md:flex">
                <!-- Visual Placeholder -->
                <div class="md:w-1/2">
                    <img src="https://placehold.co/600x400/e0f2fe/0ea5e9?text=Don't+Trust,+Verify" alt="Illustration of a person fact-checking an AI" class="w-full h-64 md:h-full object-cover">
                </div>
                <!-- Content -->
                <div class="md:w-1/2 p-6 md:p-10">
                    <h2 class="text-3xl font-bold text-cyan-600 mb-4" data-lang-key="s1_title">Don't Trust, Verify: The First Rule of AI</h2>
                    <p class="text-gray-700 mb-4" data-lang-key="s1_p1">
                        An AI is not an oracle. It doesn't "know" things; it <em>predicts</em> the next most plausible word in a sentence. This means it is a powerful <strong>"plausible text generator,"</strong> not a <strong>"truth generator."</strong>
                    </p>
                    <p class="text-gray-700" data-lang-key="s1_p2">
                        This makes <strong>you</strong> the most important part of the process. You are the human-in-the-loop, the editor, and the final judge. Never accept an AI's output as fact without first evaluating it.
                    </p>
                </div>
            </div>
        </section>
        
        <!-- 2. Common AI Pitfalls to Spot -->
        <section class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-4" data-lang-key="s2_title">Common AI Pitfalls to Spot</h2>
            <p class="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto" data-lang-key="s2_subtitle">
                AI models can make mistakes. Your job is to be the critical editor. Here's what to look for.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <!-- Hallucinations -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_item1_title">Hallucinations</h3>
                    </div>
                    <p class="text-gray-700" data-lang-key="s2_item1_desc">
                        This is when an AI confidently states a falsehood as if it were fact. It literally "makes things up" that sound plausible, like inventing a non-existent book, a fake historical event, or a made-up legal precedent.
                    </p>
                </div>

                <!-- Bias -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_item2_title">Bias</h3>
                    </div>
                    <p class="text-gray-700" data-lang-key="s2_item2_desc">
                        AI models are trained on vast amounts of human-generated text from the internet, which contains historical and societal biases. The AI can learn and reproduce these biases, such as associating certain jobs with specific genders or ethnicities.
                    </p>
                </div>

                <!-- Misinformation -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_item3_title">Misinformation</h3>
                    </div>
                    <p class="text-gray-700" data-lang-key="s2_item3_desc">
                        Slightly different from hallucinations, this is when the AI confidently provides a factual error. For example, stating "The capital of Australia is Sydney" (it's Canberra). The information exists, but the AI gets it wrong.
                    </p>
                </div>
                
                <!-- Outdated Information -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_item4_title">Outdated Information</h3>
                    </div>
                    <p class="text-gray-700" data-lang-key="s2_item4_desc">
                        Most AI models have a "knowledge cutoff" date—the point in time when their training data ends. This means they may not know about very recent events, discoveries, or news, and will not warn you about this gap.
                    </p>
                </div>
            </div>
        </section>

        <!-- 3. What is Meta-Learning? -->
        <section class="bg-white shadow-lg rounded-2xl p-6 md:p-10 mb-16">
            <h2 class="text-3xl font-bold text-center mb-4" data-lang-key="s3_title">What is Meta-Learning?</h2>
            <p class="text-center text-lg text-gray-600 mb-6 max-w-3xl mx-auto" data-lang-key="s3_p1">
                Meta-learning is simply "thinking about your own thinking." In the context of AI, it means actively reflecting on how the tool is helping or hindering your own learning process.
            </p>
            <p class="text-center text-lg text-gray-600 max-w-3xl mx-auto" data-lang-key="s3_p2">
                It's the crucial difference between passively <em>using</em> AI to get an answer and actively <em>learning</em> from your interaction with it.
            </p>
        </section>
        
        <!-- 4. AI as a Learning Partner: Risks vs. Rewards -->
        <section class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-10" data-lang-key="s4_title">AI as a Learning Partner: Risks vs. Rewards</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- The Rewards -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
                    <h3 class="flex items-center text-2xl font-bold text-green-700 mb-4">
                        <svg class="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        <span data-lang-key="s4_rewards_title">The Rewards</span>
                    </h3>
                    <ul class="list-none space-y-3 text-gray-700">
                        <li class="flex items-start">
                            <span class="text-green-500 mr-2">✔</span>
                            <span data-lang-key="s4_rewards_li1"><strong>Personalized Tutor:</strong> Explaining complex topics in simple terms, 24/7.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-500 mr-2">✔</span>
                            <span data-lang-key="s4_rewards_li2"><strong>Brainstorming Partner:</strong> Generating new ideas and perspectives you hadn't considered.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-green-500 mr-2">✔</span>
                            <span data-lang-key="s4_rewards_li3"><strong>Summarizer:</strong> Condensing long texts or articles to help you find the key points quickly.</span>
                        </li>
                    </ul>
                </div>
                <!-- The Risks -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                    <h3 class="flex items-center text-2xl font-bold text-red-700 mb-4">
                        <svg class="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        <span data-lang-key="s4_risks_title">The Risks</span>
                    </h3>
                    <ul class="list-none space-y-3 text-gray-700">
                        <li class="flex items-start">
                            <span class="text-red-500 mr-2">✖</span>
                            <span data-lang-key="s4_risks_li1"><strong>Over-Reliance:</strong> Letting the AI do the thinking for you instead of grappling with the problem yourself.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-red-500 mr-2">✖</span>
                            <span data-lang-key="s4_risks_li2"><strong>Automation Bias:</strong> Automatically trusting the AI's answer as correct without checking it.</span>
                        </li>
                        <li class="flex items-start">
                            <span class="text-red-500 mr-2">✖</span>
                            <span data-lang-key="s4_risks_li3"><strong>Reduced Critical Thinking:</strong> Losing the valuable skill of finding and evaluating information yourself.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- 5. Developing Your Meta-Learning Habits -->
        <section class="bg-indigo-50 border-l-4 border-indigo-500 rounded-lg p-6 md:p-10 mb-12">
            <h2 class="text-3xl font-bold text-indigo-800 text-center mb-6" data-lang-key="s5_title">Developing Your Meta-Learning Habits</h2>
            <p class="text-center text-lg text-indigo-700 mb-8 max-w-3xl mx-auto" data-lang-key="s5_subtitle">
                After using an AI, ask yourself these questions to deepen your learning.
            </p>
            <div class="space-y-4">
                <div class="bg-white p-5 rounded-lg shadow">
                    <p class="text-lg text-gray-800" data-lang-key="s5_q1"><strong>1.</strong> Did the AI's answer truly help me <em>understand</em> the topic, or did I just copy the result?</p>
                </div>
                <div class="bg-white p-5 rounded-lg shadow">
                    <p class="text-lg text-gray-800" data-lang-key="s5_q2"><strong>2.</strong> How did the AI's response differ from my own initial thoughts? Why?</p>
                </div>
                <div class="bg-white p-5 rounded-lg shadow">
                    <p class="text-lg text-gray-800" data-lang-key="s5_q3"><strong>3.</strong> What parts of the AI's output did I need to verify or correct? What does that tell me about its limitations?</p>
                </div>
                <div class="bg-white p-5 rounded-lg shadow">
                    <p class="text-lg text-gray-800" data-lang-key="s5_q4"><strong>4.</strong> Next time, how could I write a better prompt to get a more accurate or insightful response?</p>
                </div>
            </div>
        </section>`;
}

// Export default for convenience
export default getContent;
