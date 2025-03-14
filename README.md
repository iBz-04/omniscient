<a href="https://www.turboseek.io">
  <img alt="Turbo Seek" src="./public/og-image.png">
  <h1 align="center">Omniscient</h1>
</a>

<p align="center">
  An smart internet surf engine powered by open source ai models. 
</p>


## Working Mechanism

→ Step 1: Receive the User's Question  
   The process starts by capturing the user's input question.

→ Step 2: Retrieve Top 6 Search Results  
   The question is passed to our Search API, which returns the 6 most relevant links.

→ Step 3: Scrape and Store Context  
   Text is scraped from each of the 6 links to compile necessary context information.

→ Step 4: Generate a Detailed Answer with Llama 3.1 70B  
   The user's question and the gathered context are sent to Llama 3.1 70B, which streams back a comprehensive answer in real time.

→ Step 5: Suggest 3 Follow-Up Questions with Llama 3.1 8B  
   Finally, Llama 3.1 8B is used to generate three additional questions that the user might ask to explore the topic further.


