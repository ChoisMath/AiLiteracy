// Module 02 Content
// Extracted from 02_PromptEngineering.html

export function getContent() {
  return `<!-- Section Title -->
        <section class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900" data-lang-key="title">02. Operational Skills</h1>
            <p class="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto" data-lang-key="subtitle">
                Practical abilities to interact with AI through effective prompts and commands.
            </p>
        </section>

        <!-- 1. The Art of the Prompt -->
        <section class="bg-white shadow-lg rounded-2xl overflow-hidden mb-16">
            <div class="md:flex">
                <!-- Visual Placeholder -->
                <div class="md:w-1/2">
                    <img src="https://placehold.co/600x400/fdf2f8/db2777?text=The+Art+of+the+Prompt" alt="Illustration of a person talking to an AI" class="w-full h-64 md:h-full object-cover">
                </div>
                <!-- Content -->
                <div class="md:w-1/2 p-6 md:p-10">
                    <h2 class="text-3xl font-bold text-pink-600 mb-4" data-lang-key="s1_title">The Art of the Prompt</h2>
                    <p class="text-gray-700 mb-4" data-lang-key="s1_p1">
                        Interacting with AI, especially Generative AI, is a skill. The user's instruction is called a <strong>"prompt."</strong> The quality of the AI's output is directly proportional to the quality of your prompt.
                    </p>
                    <p class="text-gray-700" data-lang-key="s1_p2">
                        A vague prompt like "write about cats" will give a generic, boring answer. A specific, detailed prompt will give a tailored, useful, and creative response. This skill is often called <strong>"prompt engineering."</strong>
                    </p>
                </div>
            </div>
        </section>
        
        <!-- 2. The RACE Framework -->
        <section class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-4" data-lang-key="s2_title">A Framework for Better Prompts: RACE</h2>
            <p class="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto" data-lang-key="s2_subtitle">
                To get the best results, give the AI clear instructions. The <strong>RACE</strong> framework is a simple way to remember the key components of a great prompt.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <!-- R: Role -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-xl font-bold">R</span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_r_title">Role (Who the AI should be)</h3>
                    </div>
                    <p class="text-gray-700 mb-4" data-lang-key="s2_r_desc">Assign a persona or expertise to the AI. This focuses its knowledge and sets the tone.</p>
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <strong class="text-gray-800" data-lang-key="s2_example_title">Example:</strong>
                        <p class="text-gray-700 italic" data-lang-key="s2_r_example">"Act as an expert travel guide specializing in budget travel in Japan."</p>
                    </div>
                </div>

                <!-- A: Audience -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xl font-bold">A</span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_a_title">Audience (Who the response is for)</h3>
                    </div>
                    <p class="text-gray-700 mb-4" data-lang-key="s2_a_desc">Tell the AI who you are writing for. This adjusts the complexity, style, and vocabulary.</p>
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <strong class="text-gray-800" data-lang-key="s2_example_title">Example:</strong>
                        <p class="text-gray-700 italic" data-lang-key="s2_a_example">"Explain this to a 10th-grade student," or "Write this for a team of senior engineers."</p>
                    </div>
                </div>

                <!-- C: Context -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xl font-bold">C</span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_c_title">Context (The background info)</h3>
                    </div>
                    <p class="text-gray-700 mb-4" data-lang-key="s2_c_desc">Provide the necessary background, constraints, or information the AI needs to complete the task.</p>
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <strong class="text-gray-800" data-lang-key="s2_example_title">Example:</strong>
                        <p class="text-gray-700 italic" data-lang-key="s2_c_example">"My team has been feeling burnt out. I have a budget of $500. I need three ideas for a team-building event."</p>
                    </div>
                </div>
                
                <!-- E: Expectation -->
                <div class="bg-white p-6 rounded-2xl shadow-lg">
                    <div class="flex items-center mb-3">
                        <span class="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold">E</span>
                        <h3 class="ml-4 text-2xl font-bold text-gray-900" data-lang-key="s2_e_title">E = Expectation (The desired output)</h3>
                    </div>
                    <p class="text-gray-700 mb-4" data-lang-key="s2_e_desc">Be explicit about what you want. Define the format, length, style, and tone of the final product.</p>
                    <div class="bg-gray-100 p-4 rounded-lg">
                        <strong class="text-gray-800" data-lang-key="s2_example_title">Example:</strong>
                        <p class="text-gray-700 italic" data-lang-key="s2_e_example">"Provide the answer as a bulleted list. Keep the tone enthusiastic and professional. Do not exceed 150 words."</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 3. Advanced Prompting Techniques -->
        <section class="mb-16">
            <h2 class="text-3xl font-bold text-center mb-8" data-lang-key="s3_title">Advanced Prompting Techniques</h2>
            <div class="space-y-4 max-w-3xl mx-auto">
                
                <!-- Accordion Item 1: Meta-Prompting -->
                <div class="bg-white shadow-md rounded-lg">
                    <h2>
                        <button type="button" class="accordion-button flex items-center justify-between w-full p-6 text-left font-semibold text-xl text-gray-900" aria-expanded="false" data-accordion-target="#accordion-body-1">
                            <span class="flex items-center">
                                <svg class="w-6 h-6 mr-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M12 21v-1m0-16a1 1 0 011 1v2a1 1 0 01-2 0V5a1 1 0 011-1zm0 16a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z"></path>
                                </svg>
                                <span data-lang-key="s3_term1_title">Meta-Prompting</span>
                            </span>
                            <svg class="w-6 h-6 shrink-0 rotate-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-body-1" class="hidden p-6 border-t border-gray-200">
                        <p class="text-gray-700" data-lang-key="s3_term1_desc">
                            This is "prompting about prompting." Instead of asking the AI for the final answer, you ask it to help you create a better prompt.
                            <br><br><strong>Example:</strong> "I need to write an email to my boss asking for a raise. What information should I include in my prompt to you to get the best possible draft?"
                        </p>
                    </div>
                </div>

                <!-- Accordion Item 2: Zero-Shot vs Few-Shot -->
                <div class="bg-white shadow-md rounded-lg">
                    <h2>
                        <button type="button" class="accordion-button flex items-center justify-between w-full p-6 text-left font-semibold text-xl text-gray-900" aria-expanded="false" data-accordion-target="#accordion-body-2">
                            <span class="flex items-center">
                                <svg class="w-6 h-6 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                                </svg>
                                <span data-lang-key="s3_term2_title">Zero-Shot vs. Few-Shot Prompting</span>
                            </span>
                            <svg class="w-6 h-6 shrink-0 rotate-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-body-2" class="hidden p-6 border-t border-gray-200">
                        <p class="text-gray-700" data-lang-key="s3_term2_desc">
                            <strong>Zero-Shot:</strong> A simple, direct question without any prior examples. (e.g., "What is the capital of France?")
                            <br><br>
                            <strong>Few-Shot:</strong> Providing 1–3 examples of the <em>exact</em> format you want <em>before</em> you ask your question. This is extremely effective for getting specific formatting.
                            <br><br>
                            <strong>Example:</strong><br>
                            Q: Is 'apple' a fruit or vegetable?<br>
                            A: Fruit<br>
                            Q: Is 'spinach' a fruit or vegetable?<br>
                            A: Vegetable<br>
                            Q: Is 'tomato' a fruit or vegetable?<br>
                            (The AI will now answer "Fruit" and just that.)
                        </p>
                    </div>
                </div>

                <!-- Accordion Item 3: Chain-of-Thought -->
                <div class="bg-white shadow-md rounded-lg">
                    <h2>
                        <button type="button" class="accordion-button flex items-center justify-between w-full p-6 text-left font-semibold text-xl text-gray-900" aria-expanded="false" data-accordion-target="#accordion-body-3">
                            <span class="flex items-center">
                                <svg class="w-6 h-6 mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                                <span data-lang-key="s3_term3_title">Chain-of-Thought (CoT) Prompting</span>
                            </span>
                            <svg class="w-6 h-6 shrink-0 rotate-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-body-3" class="hidden p-6 border-t border-gray-200">
                        <p class="text-gray-700" data-lang-key="s3_term3_desc">
                            For complex problems (like math, logic, or coding), this technique dramatically improves accuracy. By simply adding the phrase "Let's think step by step," you force the AI to slow down, show its work, and make fewer errors.
                            <br><br><strong>Example:</strong> "I have 5 apples and I give 2 to Sarah. Sarah already had 3 apples. How many apples does Sarah have now? Let's think step by step."
                        </p>
                    </div>
                </div>

                <!-- Accordion Item 4: Negative Prompting -->
                <div class="bg-white shadow-md rounded-lg">
                    <h2>
                        <button type="button" class="accordion-button flex items-center justify-between w-full p-6 text-left font-semibold text-xl text-gray-900" aria-expanded="false" data-accordion-target="#accordion-body-4">
                            <span class="flex items-center">
                                <svg class="w-6 h-6 mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                                </svg>
                                <span data-lang-key="s3_term4_title">Negative Prompting</span>
                            </span>
                            <svg class="w-6 h-6 shrink-0 rotate-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </h2>
                    <div id="accordion-body-4" class="hidden p-6 border-t border-gray-200">
                        <p class="text-gray-700" data-lang-key="s3_term4_desc">
                            Telling the AI what <em>not</em> to do is as important as telling it what to do. This helps you avoid unwanted content, styles, or words.
                            <br><br><strong>Example:</strong> "Write a description of a friendly robot. Do not use the word 'cyber' or 'futuristic'. Avoid technical jargon."
                        </p>
                    </div>
                </div>

            </div>
        </section>

        <!-- 4. Beyond Text: Other AI Interactions -->
        <section class="bg-white shadow-lg rounded-2xl p-6 md:p-10 mb-16">
            <h2 class="text-3xl font-bold text-center mb-8" data-lang-key="s4_title">Beyond Text: Other AI Interactions</h2>
            <p class="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto" data-lang-key="s4_subtitle">
                Operational skills also apply to AI models that create images, analyze data, or even control robots.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <!-- Image Generation -->
                <div class="bg-gray-100 p-6 rounded-lg">
                    <h3 class="text-xl font-semibold mb-3" data-lang-key="s4_img_title">1. Image Generation (GenAI)</h3>
                    <p class="text-gray-700 mb-4" data-lang-key="s4_img_desc">Image prompts combine several elements to build a scene. Good prompts often include:</p>
                    <ul class="list-disc list-inside text-gray-700 space-y-1">
                        <li data-lang-key="s4_img_li1"><strong>Subject:</strong> "A red fox..."</li>
                        <li data-lang-key="s4_img_li2"><strong>Action:</strong> "...wearing a tiny astronaut helmet..."</li>
                        <li data-lang-key="s4_img_li3"><strong>Setting:</strong> "...sitting on Mars, looking at Earth."</li>
                        <li data-lang-key="s4_img_li4"><strong>Style:</strong> "Digital art, cinematic lighting, highly detailed."</li>
                    </ul>
                </div>

                <!-- Data Analysis -->
                <div class="bg-gray-100 p-6 rounded-lg">
                    <h3 class="text-xl font-semibold mb-3" data-lang-key="s4_data_title">2. Data Analysis (Predictive AI)</h3>
                    <p class="text-gray-700 mb-4" data-lang-key="s4_data_desc">When interacting with data tools, you must be precise. Good prompts include:</p>
                    <ul class="list-disc list-inside text-gray-700 space-y-1">
                        <li data-lang-key="s4_data_li1"><strong>Data Source:</strong> "Using the 'sales_data.csv' file..."</li>
                        <li data-lang-key="s4_data_li2"><strong>Specific Columns:</strong> "...compare the 'Sales' column and the 'Region' column."</li>
                        <li data-lang-key="s4_data_li3"><strong>Desired Output:</strong> "Create a bar chart showing total sales per region."</li>
                    </ul>
                </div>
            </div>
        </section>
        
        <!-- 5. Do's and Don'ts -->
        <section class="mb-12">
            <h2 class="text-3xl font-bold text-center mb-8" data-lang-key="s5_title">Quick Tips: Do's and Don'ts</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Do's -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500">
                    <h3 class="flex items-center text-2xl font-bold text-green-700 mb-4">
                        <svg class="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span data-lang-key="s5_dos_title">DO...</span>
                    </h3>
                    <ul class="list-disc list-inside space-y-3 text-gray-700">
                        <li data-lang-key="s5_dos_li1"><strong>Be specific and clear.</strong> More detail is almost always better.</li>
                        <li data-lang-key="s5_dos_li2"><strong>Iterate and refine.</strong> Your first prompt is rarely your best. Treat it as a conversation.</li>
                        <li data-lang-key="s5_dos_li3"><strong>Use constraints.</strong> Define word count, format (table, list, paragraph), and tone.</li>
                        <li data-lang-key="s5_dos_li4"><strong>Politely correct the AI.</strong> If it makes a mistake, tell it. "That's not what I meant. Please focus on..."</li>
                    </ul>
                </div>
                <!-- Don'ts -->
                <div class="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500">
                    <h3 class="flex items-center text-2xl font-bold text-red-700 mb-4">
                        <svg class="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span data-lang-key="s5_donts_title">DON'T...</span>
                    </h3>
                    <ul class="list-disc list-inside space-y-3 text-gray-700">
                        <li data-lang-key="s5_donts_li1"><strong>Use vague language.</strong> Avoid words like "make it better" or "a normal summary."</li>
                        <li data-lang-key="s5_donts_li2"><strong>Ask multiple unrelated questions</strong> in a single prompt.</li>
                        <li data-lang-key="s5_donts_li3"><strong>Trust the output blindly.</strong> Always verify facts, figures, and code.</li>
                        <li data-lang-key="s5_donts_li4"><strong>Forget context.</strong> Don't assume the AI knows what you're talking about from a previous chat.</li>
                    </ul>
                </div>
            </div>
        </section>`;
}

// Export default for convenience
export default getContent;
