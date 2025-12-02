// Module 01 Content
// Extracted from 01_core_understanding.html

export function getContent() {
  return `<!-- Section Title -->
        <section class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900" data-lang-key="title">01. Core Understanding</h1>
            <p class="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto" data-lang-key="subtitle">
                Foundational AI concepts, terminology, and how different AI systems work.
            </p>
        </section>

        <!-- 1. What is AI? -->
        <section class="bg-white shadow-lg rounded-2xl overflow-hidden mb-12">
            <div class="md:flex">
                <!-- Visual Placeholder -->
                <div class="md:w-1/2">
                    <img src="https://placehold.co/600x400/e0f2fe/0c4a6e?text=What+is+AI%3F" alt="Abstract representation of Artificial Intelligence" class="w-full h-64 md:h-full object-cover">
                </div>
                <!-- Content -->
                <div class="md:w-1/2 p-6 md:p-10">
                    <h2 class="text-3xl font-bold text-indigo-700 mb-4" data-lang-key="s1_title">What is Artificial Intelligence?</h2>
                    <p class="text-gray-700 mb-4" data-lang-key="s1_p1">
                        Artificial Intelligence (AI) is a broad field of computer science focused on creating systems that can simulate human intelligence to perform tasks. These tasks can include learning, reasoning, problem-solving, perception, and language understanding.
                    </p>
                    <p class="text-gray-700 mb-4" data-lang-key="s1_p2">
                        Think of it as teaching a machine to &quot;think&quot; or &quot;act&quot; like a human, but not in the way you see in movies. Instead, it's about processing information and recognizing patterns to make a decision or create something new.
                    </p>
                    <p class="text-gray-700" data-lang-key="s1_p3">
                        It's also important to distinguish AI from simple automation. Automation follows pre-programmed <em>rules</em> (if X happens, do Y). AI, specifically Machine Learning, makes <em>predictions</em> and <em>decisions</em> based on <em>patterns</em> it has learned from data, allowing it to handle new and unseen situations.
                    </p>
                </div>
            </div>
        </section>

        <!-- 2. Key Terminology (Accordion) -->
        <section class="mb-12">
            <h2 class="text-3xl font-bold text-center mb-8" data-lang-key="s2_title">Key Terminology</h2>
            <div class="space-y-4 max-w-3xl mx-auto">
                
                <!-- Accordion Item 1: Machine Learning -->
                <div class="bg-white shadow-md rounded-lg">
                    <h2>
                        <button type="button" class="accordion-button flex items-center justify-between w-full p-6 text-left font-semibold text-xl text-gray-900" aria-expanded="false" data-accordion-target="#accordion-body-1">
                            <span data-lang-key="s2_term1_title">Machine Learning (ML)</span>
                            <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-body-1" class="hidden p-6 border-t border-gray-200">
                        <p class="text-gray-700" data-lang-key="s2_term1_desc">
                            This is the most common type of AI. Instead of being explicitly programmed with rules, a machine &quot;learns&quot; directly from large amounts of data. It identifies patterns in the data to make predictions or decisions.
                            <br><br><strong>Example:</strong> An email spam filter learns to identify junk mail based on thousands of examples of spam and non-spam emails.
                        </p>
                    </div>
                </div>

                <!-- Accordion Item 2: Deep Learning -->
                <div class="bg-white shadow-md rounded-lg">
                    <h2>
                        <button type="button" class="accordion-button flex items-center justify-between w-full p-6 text-left font-semibold text-xl text-gray-900" aria-expanded="false" data-accordion-target="#accordion-body-2">
                            <span data-lang-key="s2_term2_title">Deep Learning (DL)</span>
                            <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-body-2" class="hidden p-6 border-t border-gray-200">
                        <p class="text-gray-700" data-lang-key="s2_term2_desc">
                            A more advanced subfield of Machine Learning. Deep Learning uses &quot;neural networks&quot; with many layers (hence &quot;deep&quot;) to solve complex problems. It's inspired by the structure of the human brain.
                            <br><br><strong>Example:</strong> Self-driving cars use Deep Learning to identify pedestrians, traffic lights, and other cars from camera data.
                        </p>
                    </div>
                </div>

                <!-- Accordion Item 3: Neural Networks -->
                <div class="bg-white shadow-md rounded-lg">
                    <h2>
                        <button type="button" class="accordion-button flex items-center justify-between w-full p-6 text-left font-semibold text-xl text-gray-900" aria-expanded="false" data-accordion-target="#accordion-body-3">
                            <span data-lang-key="s2_term3_title">Neural Networks (NN)</span>
                            <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-body-3" class="hidden p-6 border-t border-gray-200">
                        <p class="text-gray-700" data-lang-key="s2_term3_desc">
                            The core component of Deep Learning. A Neural Network is a system of interconnected &quot;nodes&quot; or &quot;neurons&quot; in layers. Data passes through these layers, which process and transform it to find patterns and make a final decision.
                        </p>
                    </div>
                </div>

                <!-- Accordion Item 4: Large Language Models -->
                <div class="bg-white shadow-md rounded-lg">
                    <h2>
                        <button type="button" class="accordion-button flex items-center justify-between w-full p-6 text-left font-semibold text-xl text-gray-900" aria-expanded="false" data-accordion-target="#accordion-body-4">
                            <span data-lang-key="s2_term4_title">Large Language Models (LLMs)</span>
                            <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-body-4" class="hidden p-6 border-t border-gray-200">
                        <p class="text-gray-700" data-lang-key="s2_term4_desc">
                            These are a type of AI, built using Deep Learning and massive amounts of text data (like the entire internet). They are trained to understand and generate human-like text.
                            <br><br><strong>Example:</strong> Chatbots like Gemini or ChatGPT, which can answer questions, write stories, and translate languages.
                        </p>
                    </div>
                </div>

                <!-- Accordion Item 5: Generative AI -->
                <div class="bg-white shadow-md rounded-lg">
                    <h2>
                        <button type="button" class="accordion-button flex items-center justify-between w-full p-6 text-left font-semibold text-xl text-gray-900" aria-expanded="false" data-accordion-target="#accordion-body-5">
                            <span data-lang-key="s2_term5_title">Generative AI (GenAI)</span>
                            <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-body-5" class="hidden p-6 border-t border-gray-200">
                        <p class="text-gray-700" data-lang-key="s2_term5_desc">
                            A category of AI that can <em>create</em> new content, not just analyze existing data. This includes text, images, music, and code. LLMs are a type of Generative AI.
                            <br><br><strong>Example:</strong> AI art generators (like DALL-E or Midjourney) that create detailed images from a simple text prompt.
                        </p>
                    </div>
                </div>

                <!-- Accordion Item 6: NLP -->
                <div class="bg-white shadow-md rounded-lg">
                    <h2>
                        <button type="button" class="accordion-button flex items-center justify-between w-full p-6 text-left font-semibold text-xl text-gray-900" aria-expanded="false" data-accordion-target="#accordion-body-6">
                            <span data-lang-key="s2_term6_title">Natural Language Processing (NLP)</span>
                            <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-body-6" class="hidden p-6 border-t border-gray-200">
                        <p class="text-gray-700" data-lang-key="s2_term6_desc">
                            The field of AI focused on giving computers the ability to understand, interpret, and generate human <em>text</em>. It's how machines process and analyze language.
                            <br><br><strong>Example:</strong> Google Translate, email spam filters, grammar-checking tools, and sentiment analysis (determining if a review is positive or negative).
                        </p>
                    </div>
                </div>

                <!-- Accordion Item 7: Computer Vision -->
                <div class="bg-white shadow-md rounded-lg">
                    <h2>
                        <button type="button" class="accordion-button flex items-center justify-between w-full p-6 text-left font-semibold text-xl text-gray-900" aria-expanded="false" data-accordion-target="#accordion-body-7">
                            <span data-lang-key="s2_term7_title">Computer Vision (CV)</span>
                            <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                    </h2>
                    <div id="accordion-body-7" class="hidden p-6 border-t border-gray-200">
                        <p class="text-gray-700" data-lang-key="s2_term7_desc">
                            The field of AI that trains computers to &quot;see&quot; and interpret the visual world. Models are trained on images and videos to identify and understand objects, people, and scenes.
                            <br><br><strong>Example:</strong> Unlocking your phone with your face, self-driving cars &quot;seeing&quot; the road, and systems that tag your friends in photos.
                        </p>
                    </div>
                </div>

            </div>
        </section>

        <!-- 3. How AI Learns -->
        <section class="bg-white shadow-lg rounded-2xl overflow-hidden mb-12">
            <div class="md:flex md:flex-row-reverse">
                <!-- Visual Placeholder -->
                <div class="md:w-1/2">
                    <img src="https://placehold.co/600x400/eef2ff/4338ca?text=How+AI+Learns" alt="Diagram showing data, algorithm, and model" class="w-full h-64 md:h-full object-cover">
                </div>
                <!-- Content -->
                <div class="md:w-1/2 p-6 md:p-10">
                    <h2 class="text-3xl font-bold text-indigo-700 mb-4" data-lang-key="s3_title">How AI &quot;Learns&quot;</h2>
                    <p class="text-gray-700 mb-6" data-lang-key="s3_p1">
                        AI, especially Machine Learning, learns through a process called &quot;training.&quot; It's like a student studying for a test, but with millions of flashcards.
                    </p>
                    <ol class="list-decimal list-inside space-y-4">
                        <li class="text-gray-700">
                            <strong class="font-semibold" data-lang-key="s3_step1_title">1. Data Collection:</strong> 
                            <span data-lang-key="s3_step1_desc">Developers gather massive amounts of data. To teach an AI to recognize cats, you need thousands of pictures labeled &quot;cat&quot; and &quot;not cat.&quot;</span>
                        </li>
                        <li class="text-gray-700">
                            <strong class="font-semibold" data-lang-key="s3_step2_title">2. Training:</strong> 
                            <span data-lang-key="s3_step2_desc">The data is fed into an algorithm (the &quot;model&quot;). The model tries to find patterns and make a guess (e.g., &quot;This is a cat&quot;).</span>
                        </li>
                        <li class="text-gray-700">
                            <strong class="font-semibold" data-lang-key="s3_step3_title">3. Feedback:</strong> 
                            <span data-lang-key="s3_step3_desc">It's told if its guess is right or wrong. If wrong, it adjusts its internal settings (called &quot;weights&quot;) slightly. This process is repeated millions of times.</span>
                        </li>
                        <li class="text-gray-700">
                            <strong class="font-semibold" data-lang-key="s3_step4_title">4. Deployment:</strong> 
                            <span data-lang-key="s3_step4_desc">Once the model is accurate enough, it can be used on new, unseen data to make predictions.</span>
                        </li>
                    </ol>
                    <p class="text-gray-700 mt-6 p-4 bg-gray-100 rounded-lg" data-lang-key="s3_p2">
                        <strong class="text-gray-800">Key Concept: The &quot;Black Box&quot; Problem</strong><br>
                        In many complex AI systems, like Deep Learning, the internal decision-making process is so complicated that even its creators don't know <em>exactly</em> why it made a specific choice. They know the model is statistically accurate, but not <em>how</em> it thinks. This is a core challenge in AI.
                    </p>
                </div>
            </div>
        </section>

        <!-- 4. Types of AI by Capability -->
        <section class="mb-12">
            <h2 class="text-3xl font-bold text-center mb-8" data-lang-key="s4_title">Types of AI by Capability</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <!-- Narrow AI -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500">
                    <h3 class="text-2xl font-bold text-blue-700 mb-4" data-lang-key="s4_narrow_title">Artificial Narrow Intelligence (ANI)</h3>
                    <p class="text-gray-700 mb-4" data-lang-key="s4_narrow_desc">
                        This is the <em>only</em> type of AI we have today. ANI is designed and trained to perform one specific, narrow task. It may seem super-intelligent at that one task, but it has no awareness, consciousness, or ability to operate outside its programming.
                    </p>
                    <strong class="font-semibold" data-lang-key="s4_examples_title">Examples:</strong>
                    <ul class="list-disc list-inside mt-2 text-gray-700">
                        <li data-lang-key="s4_narrow_ex1">Siri/Alexa/Google Assistant</li>
                        <li data-lang-key="s4_narrow_ex2">Facial recognition unlocking your phone</li>
                        <li data-lang-key="s4_narrow_ex3">Netflix or YouTube recommendations</li>
                        <li data-lang-key="s4_narrow_ex4">Generative AI chatbots</li>
                    </ul>
                </div>

                <!-- General AI -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-indigo-500">
                    <h3 class="text-2xl font-bold text-indigo-700 mb-4" data-lang-key="s4_general_title">Artificial General Intelligence (AGI)</h3>
                    <p class="text-gray-700 mb-4" data-lang-key="s4_general_desc">
                        This is the hypothetical, science-fiction version of AI. AGI would possess the ability to understand, learn, and apply its intelligence to solve <em>any</em> problem, much like a human being. It would have consciousness and self-awareness.
                        <br><br>
                        <strong class="text-gray-800">AGI does not currently exist,</strong> and it is a topic of intense debate among scientists whether it is even possible.
                    </p>
                </div>

                <!-- Super AI -->
                <div class="bg-gray-800 p-8 rounded-2xl shadow-lg border-t-4 border-purple-400">
                    <h3 class="text-2xl font-bold text-purple-300 mb-4" data-lang-key="s4_super_title">Artificial Superintelligence (ASI)</h3>
                    <p class="text-gray-300 mb-4" data-lang-key="s4_super_desc">
                        A theoretical future AI that would not just mimic human intelligence, but would surpass it in every aspect—from creative capability and problem-solving to social skills. This remains firmly in the realm of science fiction and philosophical discussion.
                    </p>
                </div>
            </div>
        </section>

        <!-- 5. AI in Your Daily Life -->
        <section class="bg-white shadow-lg rounded-2xl p-6 md:p-10 mb-12">
            <h2 class="text-3xl font-bold text-center mb-8" data-lang-key="s5_title">AI in Your Daily Life</h2>
            <p class="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto" data-lang-key="s5_subtitle">
                AI isn't just one thing; it's a set of different technologies. Here’s how you interact with them, often without realizing it.
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <!-- 1. NLP -->
                <div class="text-center p-4">
                    <div class="flex justify-center items-center mb-4">
                        <div class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                            <!-- chat icon -->
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold mb-2" data-lang-key="s5_ex1_title">Natural Language Processing (NLP)</h3>
                    <p class="text-gray-600" data-lang-key="s5_ex1_desc">
                        Used for understanding and processing <em>text</em>.<br><strong>Examples:</strong> Email spam filters, grammar checkers, and language translation.
                    </p>
                </div>

                <!-- 2. Speech & Audio -->
                <div class="text-center p-4">
                    <div class="flex justify-center items-center mb-4">
                        <div class="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center">
                            <!-- mic icon -->
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold mb-2" data-lang-key="s5_ex2_title">Speech &amp; Audio Recognition</h3>
                    <p class="text-gray-600" data-lang-key="s5_ex2_desc">
                        Used for understanding <em>spoken</em> language.<br><strong>Examples:</strong> Voice assistants (Siri, Alexa), voice-to-text dictation, and customer service phone bots.
                    </p>
                </div>

                <!-- 3. Computer Vision -->
                <div class="text-center p-4">
                    <div class="flex justify-center items-center mb-4">
                        <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                            <!-- eye icon -->
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold mb-2" data-lang-key="s5_ex3_title">Computer Vision (CV)</h3>
                    <p class="text-gray-600" data-lang-key="s5_ex3_desc">
                        Allows AI to &quot;see&quot; and interpret visual info.<br><strong>Examples:</strong> Facial recognition, tagging people in photos, and interpreting medical scans (X-rays, MRIs).
                    </p>
                </div>

                <!-- 4. Recommendation Engines -->
                <div class="text-center p-4">
                    <div class="flex justify-center items-center mb-4">
                        <div class="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center">
                            <!-- thumb up icon -->
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-7.017A2 2 0 016.25 19v-7a2 2 0 012-2h2V3a2 2 0 012-2h3a2 2 0 012 2v7z"></path></svg>
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold mb-2" data-lang-key="s5_ex4_title">Recommendation Engines</h3>
                    <p class="text-gray-600" data-lang-key="s5_ex4_desc">
                        A type of <em>predictive AI</em> that forecasts your preferences.<br><strong>Examples:</strong> Netflix suggesting what to watch, Amazon's &quot;Customers also bought&quot;.
                    </p>
                </div>
                
                <!-- 5. Generative AI -->
                <div class="text-center p-4">
                    <div class="flex justify-center items-center mb-4">
                        <div class="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                            <!-- sparkles icon -->
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold mb-2" data-lang-key="s5_ex5_title">Generative AI (GenAI)</h3>
                    <p class="text-gray-600" data-lang-key="s5_ex5_desc">
                        Creates new, original content.<br><strong>Examples:</strong> LLMs (like Gemini/ChatGPT) writing text, and AI art generators (DALL-E) creating images.
                    </p>
                </div>

                <!-- 6. Robotics -->
                <div class="text-center p-4">
                    <div class="flex justify-center items-center mb-4">
                        <div class="w-16 h-16 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center">
                            <!-- cog icon -->
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                    </div>
                    <h3 class="text-xl font-semibold mb-2" data-lang-key="s5_ex6_title">Robotics</h3>
                    <p class="text-gray-600" data-lang-key="s5_ex6_desc">
                        Combines AI (like CV and predictive models) with physical hardware.<br><strong>Examples:</strong> Advanced manufacturing, warehouse automation, and robot vacuums.
                    </p>
                </div>
            </div>
        </section>`;
}

// Export default for convenience
export default getContent;
