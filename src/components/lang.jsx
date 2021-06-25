import React from "react";
import { Link, RedText} from "./Styles"
const sentencesIn = {
    fr: [
        <>
            Positionnez et soutenez votre produit,  <br />
            ou organisation au centre même de votre <br />
            écosystème de parties prenantes.
        </>,
        <>
            Faites de votre communication d'entreprise <br />
            l'outil clé pour optimiser vos interactions, <br />
            tant en interne qu'avec vos clients.
        </>,
        <>
            Veillez à être compris par toutes les communautés, <br />
            cultures, disciplines et publics cibles.
        </>,
        <>
            Des solutions de communication efficaces, <br />
            éthiques, régénératrices et (re)connectantes.
        </>,
        <>
            <Link target="_blank" href="https://www.linkedin.com/">Michaela Emch</Link>, spécialiste en communication <br />
            et praticienne du biomimétisme. Auteur du livre <br />
            "Vers une communication bioinfusée <br />
            – Le Guide pour une Communication 
        </>,
        <>
            Des solutions de communication humaines basées <br />
            sur des formes, des processus et des systèmes <br />
            observés dans la Nature.
        </>,
        <>
            Pourquoi réinventer la roue ? La Nature <br />
            a des solutions issues de 3,8 milliards <br />
            d'années d'évolution.
        </>,
        <>
            En abstrayant le défi que vous souhaitez relever <br />
            et en recherchant dans les formes, processus et <br />
            systèmes naturels la meilleure façon d'atteindre <br />
            votre objectif (inspiré de la méthodologie du biomimétisme).
        </>,
        "Envoyer un message",
        "Votre Email",
        "Code postal",
        "Pays",
        "Envoyer"

    ],
    en: [
        <>
            Position and promote your product, service or <br />
            organization at the very center of your <br />
            stakeholder ecosystem.
        </>,
        <>
            Make your corporate communication the key <br />
            tool for optimized interactions, both internally <br />
            and with your clients.
        </>,
        <>
            Ensure to be understood across <br />
            communities, cultures, disciplines and target <br />
            audiences.
        </>,
        <>
            Communication solutions that are efficient, <br />
            ethical, regenerative and (re)connecting.
        </>,
        <>
            <Link target="_blank" href="https://www.linkedin.com/">Michaela Emch</Link>, communication specialist <br />
            and biomimicry  practitioner. Author of the <br />
            book “From Nature’s Mouth – The Handbook <br />
            for Bioinfused Human Communication”.
        </>,
        <>
            Human communication solutions based on <br />
            forms, processes and systems observed in <br />
            Nature.
        </>,
        <>
            Why reinvent the wheel? Nature has <br />
            solutions derived from 3.8 billion years of <br />
            evolution.
        </>,
        <>
            By abstracting the challenge you wish to <br />
            address and searching in natural forms, <br />
            processes and systems how best to reach <br />
            your goal (inspired by the biomimicry methodology).
        </>,
        // "Send a message",
        // "Your Email",
        // "Postal code",
        // "Country",
        // "Send",
        <>
        Video Biomimicry Switzerland – “My
        biomimicry journey” <br />
        https://www.youtube.com/watch?v=gsAHHDG1I4Y <br />
        Video GRC – “Introduction to biomimicry –
        open discussion” (coming soon)
        Podcast EEI (coming soon)
        </>
    ],
    du: [
        <>
            Positionieren und bewerben Sie Ihr Produkt, Ihren <br />
            Service oder Ihre Organisation im Zentrum des <br />
            Ökosystems Ihrer Stakeholder.
        </>,
        <>
            Machen Sie Ihre Unternehmenskommunikation zum <br />
            zentralen Werkzeug für optimierte Interaktionen, <br />
            sowohl intern als auch mit Ihren Kunden.
        </>,
        <>
            Sicherstellen, dass sie über Gemeinschaften, <br />
            Kulturen, Disziplinen und Zielgruppen hinweg <br />
            verstanden werden.
        </>,
        <>
            Kommunikationslösungen, die effizient, ethisch, <br />
            regenerativ und (wieder) verbindend sind.
        </>,
        <>
            <Link target="_blank" href="https://www.linkedin.com/">Michaela Emch</Link>, Kommunikationsspezialistin <br /> und 
            Biomimikry-Praktikerin. Autorin des Buches <br /> "From Nature's Mouth
            - The Handbook for <br />
            Bioinfused Human Communication".
        </>,
        <>
            Menschliche Kommunikationslösungen, die auf in <br />
            der Natur beobachteten Formen, Prozessen <br />
            und Systemen basieren.
        </>,
        <>
            Warum das Rad neu erfinden? Die Natur hat <br />
            Lösungen, die aus 3,8 Milliarden Jahren <br />
            Evolution stammen.
        </>,
        <>
            Indem Sie die Herausforderung, die Sie angehen <br />
            möchten, abstrahieren und in natürlichen Formen, <br />
            Prozessen und Systemen suchen, wie Sie Ihr Ziel am <br />
            besten erreichen können (inspiriert von der Biomimikry-Methodik).
        </>,
        "Eine Nachricht schicken",
        "Deine E-Mail",
        "Postleitzahl",
        "Land",
        "Senden"

    ]
}

const titleIn = {
    fr: [
        <>
            Osez la communication <br /> <RedText>bioinfusée!</RedText>    
        </>,

        "Marketing & Branding",

        <>Formation & Esprit d'équipe</>,

        "Traduction & Adaptation culturelle",

        "Que pouvez-vous attendre ?",

        <>Qui vous guide ?</>,

        <>Qu'est-ce que la communication <br />bioinfusée ? </>,

        <>Pourquoi une communication bioinfusée ?</>,

        "La méthode",

        "Nouvelles – lien vers blog ?",

        "Contact",
        
        "Commandez le livre"
    ],
    en: [
        <>
            Dare to engage in <br />
            <RedText>bioinfused</RedText>  communication!    
        </>,

        "Marketing & Branding",

        <>Training & Teambuilding</>,

        "Translation & cultural adaptation",

        "What can you expect?",

        <>Who guides you?</>,

        <>What is it?</>,

        <>Why Bioinfused communication?</>,

        "The method",

        "News – link to blog?",

        "Contact",

        "Our ecosystem"
    ],
    du: [
        <span style={{fontSize: "1.6rem"}}>
            Trauen Sie sich an die <br /><RedText>bioinfundierte</RedText> Kommunikation heran!  
        </span>,

        "Marketing & Branding",

        <>Schulung & Teambuilding</>,

        "Übersetzung & kulturelle Anpassung",

        "Was können Sie erwarten?",

        <>Wer begleitet Sie?</>,

        <>Was ist bioinfundierte Kommunikation?</>,

        <> Warum bioinfundierte Kommunikation?</>,

        "Die Methode",

        "Neuigkeiten - Link zum Blog?",

        "Kontakt",

        <span style={{ fontSize: "4rem" }}>Bestellen Sie das Buch (auf Englisch)</span>
    ],
}


export function titre(lang, index) {
    return titleIn[lang][index - 1];
}
export function paragraphe(language, index){
    return sentencesIn[language][index - 1];
}