<a href="https://www.turboseek.io">
  <img alt="Turbo Seek" src="./public/og-image.png">
  <h1 align="center">Omniscient</h1>
</a>

<p align="center">
  An smart AI search engine. 
</p>



## Tech stack

- Next.js 
- Together AI 
- Llama 3.1 8B and 70B for the LLMs
- Bing API
- Helicone 
- Plausible 

## Working Mechanism

1. Take in a user's question
2. Make a request to the search API to look up the top 6 results and show them
3. Scrape text from the 6 links bing sent back and store it as context
4. Make a request to Llama 3.1 70B with the user's question + context & stream it back to the user
5. Make another request to Llama 3.1 8B to come up with 3 related questions the user can follow up with



## Inspiration

- Perplexity
- You.com
- Lepton search
