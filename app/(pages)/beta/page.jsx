'use client'
import CodeComparison from "@/app/components/ui/code-comparison";
import { randomCodeSamples } from "@/app/constant/Text";
import Link from "next/link";
import { useState } from "react";

const Beta = () => {
    const [code, setCode] = useState("");
    const [newCode, setNewCode] = useState(""); 

    const insertRandomSample = () => {
        const randomSample = randomCodeSamples[Math.floor(Math.random() * randomCodeSamples.length)];
        setCode(randomSample);
    };

    const handleAnalyze = () => {
        const optimizedCode = "// Optimized Code\n"+ code ;

        setNewCode(optimizedCode);
    };

    return (
        <>
            <section id="beta" className="flex flex-col px-4 py-8 pt-24 md:pt-32 gap-4 md:gap-0 md:px-8">
                <header className="fixed z-[999] bg-[#080807] top-0 right-0 left-0 flex items-center justify-between border-b border-[#232323] px-4 py-8 md:px-8">
                    <Link href={'/'}>
                        <img src="/imgs/echo-logo.png" className="w-[32vw] md:w-32" alt="" />
                    </Link>
                    <ul className="flex gap-5">
                        <li>
                            <Link href="/">Website</Link>
                        </li>
                        <li>
                            <a href="" target="_blank">Twitter</a>
                        </li>
                    </ul>
                </header>

                <h1 className="md:text-xl">Welcome to <span className="font-bold">Debug® by ECHO®</span>, your AI-driven solution for quick code analysis and optimization.</h1>
                <p className="md:text-xl">Paste your code below or insert a random sample, then click <span>Analyze & Optimize</span> to have Debug® identify bugs, suggest improvements, and produce optimized code.</p>

                <div className="flex flex-col gap-4 py-3 md:py-8">
                    <div className="flex gap-2 items-center">
                        <label htmlFor="">Language:</label>
                        <select name="" id="" className="bg-[#232323] px-3 py-2 rounded-lg border-2 w-1/2 md:w-44 lg:w-40  border-gray-700" >
                            <option value="JavaScript">JavaScript</option>
                            <option value="Python">Python</option>
                        </select>
                    </div>

                    <div className="flex gap-2 items-center">
                        <label htmlFor="">Analysis Mode:</label>
                        <select name="" id="" className="bg-[#232323] px-3 py-2 rounded-lg border-2 w-1/2 md:w-44 lg:w-40 border-gray-700" >
                            <option value="JavaScript">Default</option>
                        </select>
                    </div>

                    <button onClick={insertRandomSample} className="w-full md:w-1/4 xl:w-1/6 py-3 bg-blue-500 rounded-lg">Insert Random Sample</button>
                    <div>
                        <button className=" px-4 py-3 bg-blue-500 rounded-lg">Connect (Beta)</button>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Your Code:</label>
                        <textarea
                            type="text"
                            name=""
                            id=""
                            placeholder="Paste or type your code here..."
                            rows="5"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="bg-[#232323] px-3 py-2 rounded-lg border-2 border-gray-700 w-full lg:w-1/2 xl:w-1/3"
                        />
                    </div>
                    <div>
                        <button onClick={handleAnalyze} className=" px-4 py-3 bg-blue-500 rounded-lg">Analyze & Optimize</button>
                    </div>
                </div>

                {newCode && (
                    <div className="mt-8">
                        <CodeComparison
                            beforeCode={code}
                            afterCode={newCode}
                            language="javascript"
                            lightTheme="github-light"
                            darkTheme="github-dark"
                        />
                    </div>
                )}
            </section>
        </>
    );
};

export default Beta;