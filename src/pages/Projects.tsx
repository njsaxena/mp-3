import Calculator from "../components/Calculator";

export default function Projects(){
    return (
        <>
            <h2>Projects</h2>
            <div className="project-grid">
                <article className="project-card">
                <h3>KeyWise - AI Real Estate Listing Companion</h3>
                <p className="date">Jun. 2026</p>
                <p>Developed a full-stack web application that guides homeowners through uploading property
                    details and photos, then generates MLS-ready listing copy, social media captions, and staging
                    suggestions with OpenAI.</p>
                <p>Implemented authentication with Clerk and persisted user sessions and property data with
                    Supabase, deploying the production site to Vercel at keywise.org and open-sourcing the
                    codebase on GitHub.</p>
                </article>
                <article className="project-card">
                <h3>venMorph</h3>
                <p className="date">2nd Place — EasyA x Flare x XRPL Harvard Hackathon | Sep. 2025</p>
                <p>Built a full-stack cross-chain payments MVP enabling Venmo-style transfers across crypto
                    assets using the XRP Ledger with live Flare Oracle pricing.</p>
                <p>Implemented XRPL payment flows and Flare FTSO real-time cross-chain quotes, with attestations
                    anchoring settlement proofs on-chain and multiple wallet integrations.</p>
                </article>
                <article className="project-card">
                <h3>Cl1ppy - Chrome Extension</h3>
                <p className="date">Oct. 2025</p>
                <p>Shipped a Manifest V3 extension with Gemini page analysis and ElevenLabs speech. Built
                    personality modes, configurable check-ins, and a persistent to-do module through a lightweight
                    settings UI.</p>
                </article>
                <article className="project-card">
                <h3>Elara - Treasury Network</h3>
                <p className="date">Oct. 2025</p>
                <p>Engineered a decentralized application on the Stellar blockchain enabling secure data
                  synchronization for on- and off-chain transactions with custom smart contracts and optimized
                    transaction processing efficiency.</p>
                </article>
            </div>

            <Calculator />
        </>
    );
}