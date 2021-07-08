import React from "react";
import { Link, RedText,LinkSlide} from "./Styles"
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
            <LinkSlide target="_blank" href="https://www.linkedin.com/">Michaela Emch</LinkSlide>, spécialiste en communication
            et praticienne du biomimétisme. Auteur du livre 
            "Vers une communication bioinfusée 
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
        <>
        Biomimicry Switzerland<br />
        <LinkSlide target="_blank" href="https://biomimicryswitzerland.org">https://biomimicryswitzerland.org</LinkSlide><br />
        Ask Nature<br />
        <LinkSlide target="_blank" href="https://asknature.org">https://asknature.org</LinkSlide><br />
        LearnBiomimicry<br />
        <LinkSlide target="_blank" href="https://www.learnbiomimicry.com">https://www.learnbiomimicry.com</LinkSlide><br />
        Systems Innovation<br />
        <LinkSlide target="_blank" href="https://www.systemsinnovation.io">https://www.systemsinnovation.io</LinkSlide><br />
        Global Regeneration CoLab<br />
        <LinkSlide target="_blank" href="https://www.grc.earth">https://www.grc.earth</LinkSlide><br />
        Complexity Weekend<br />
        <LinkSlide target="_blank" href="https://www.complexityweekend.com">https://www.complexityweekend.com</LinkSlide><br />
        ETH Zürich – Systemics Design Labs<br />
        <LinkSlide target="_blank" href="https://systemicdesignlabs.ethz.ch">https://systemicdesignlabs.ethz.ch</LinkSlide><br />
</>,
        <>
        Video Biomimicry Switzerland – “My
        biomimicry journey” <br />
        <Link target='_blank' href='https://www.youtube.com/watch?v=gsAHHDG1I4Y'>https://www.youtube.com/watch?v=gsAHHDG1I4Y</Link> <br />
        Video GRC – “Introduction to biomimicry –
        open discussion” (coming soon)
        Podcast EEI (coming soon)<br/>
            GRC WorldWide CoWorking Session sur le biomimetisme avec Michaela Emch": <Link target='_blank' href='https://youtu.be/2XhlLstMeqI'>https://youtu.be/2XhlLstMeqI
        </Link><br/>
            "Discussion sur GRC biomimetisme" :<Link target='_blank' href='https://youtu.be/pDhyCg9RO0E'> https://youtu.be/pDhyCg9RO0E</Link>
        </>,
        <>
            Eclosions – Marketing &amp; Communication<br />
              Michaela Emch <br />
              Rte de Praly 4 <br />
              CH-1976 Aven <br />
              <Link href="mailto:info@eclosions.ch">info@eclosions.ch</Link> <br />
              +41 76 367 76 38</>,
        "Envoyer un message",
        "Nom",
        "Prenom",
        "Adresse",
        "Code postal",
        "Localite",
        "Pays",
        "Votre Email",
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
            <Link target="_blank" href="https://www.linkedin.com/">Michaela Emch</Link>, communication specialist 
            and biomimicry  practitioner. Author of the 
            book “From Nature’s Mouth – The Handbook 
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

        <>
        Biomimicry Switzerland<br />
        <LinkSlide target="_blank" href="https://biomimicryswitzerland.org">https://biomimicryswitzerland.org</LinkSlide><br />
        Ask Nature<br />
        <LinkSlide target="_blank" href="https://asknature.org">https://asknature.org</LinkSlide><br />
        LearnBiomimicry<br />
        <LinkSlide target="_blank" href="https://www.learnbiomimicry.com">https://www.learnbiomimicry.com</LinkSlide><br />
        Systems Innovation<br />
        <LinkSlide target="_blank" href="https://www.systemsinnovation.io">https://www.systemsinnovation.io</LinkSlide><br />
        Global Regeneration CoLab<br />
        <LinkSlide target="_blank" href="https://www.grc.earth">https://www.grc.earth</LinkSlide><br />
        Complexity Weekend<br />
        <LinkSlide target="_blank" href="https://www.complexityweekend.com">https://www.complexityweekend.com</LinkSlide><br />
        ETH Zürich – Systemics Design Labs<br />
        <LinkSlide target="_blank" href="https://systemicdesignlabs.ethz.ch">https://systemicdesignlabs.ethz.ch</LinkSlide><br />
        </>,
        <>
        Video Biomimicry Switzerland – “My
        biomimicry journey” <br />
        <Link target='_blank' href='https://www.youtube.com/watch?v=gsAHHDG1I4Y'>https://www.youtube.com/watch?v=gsAHHDG1I4Y</Link> <br />
        Video GRC – “Introduction to biomimicry –
        open discussion” (coming soon)
        Podcast EEI (coming soon)<br/>
            GRC WorldWide CoWorking Session on Biomimicry with Michaela Emch<Link target='_blank' href='https://youtu.be/2XhlLstMeqI'>https://youtu.be/2XhlLstMeqI
        </Link><br/>
            "GRC Biomimicry Discussion" :<Link target='_blank' href='https://youtu.be/pDhyCg9RO0E'> https://youtu.be/pDhyCg9RO0E</Link>

        </>,
        <>
            Eclosions – Marketing &amp; Communication<br />
              Michaela Emch <br />
              Rte de Praly 4 <br />
              CH-1976 Aven <br />
              <Link href="mailto:info@eclosions.ch">info@eclosions.ch</Link> <br />
              +41 76 367 76 38</>,
              "Send a message",
              "Name",
              "First Name",
              "Address",
              "Postal Code",
              "City",
              "Country",
              "Your Email",
              "Send",
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
            <Link target="_blank" href="https://www.linkedin.com/">Michaela Emch</Link>, Kommunikationsspezialistin und 
            Biomimikry-Praktikerin. Autorin des Buches  "From Nature's Mouth
            - The Handbook for
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
        <>
        Biomimicry Switzerland<br />
        <LinkSlide target="_blank" href="https://biomimicryswitzerland.org">https://biomimicryswitzerland.org</LinkSlide><br />
        Ask Nature<br />
        <LinkSlide target="_blank" href="https://asknature.org">https://asknature.org</LinkSlide><br />
        LearnBiomimicry<br />
        <LinkSlide target="_blank" href="https://www.learnbiomimicry.com">https://www.learnbiomimicry.com</LinkSlide><br />
        Systems Innovation<br />
        <LinkSlide target="_blank" href="https://www.systemsinnovation.io">https://www.systemsinnovation.io</LinkSlide><br />
        Global Regeneration CoLab<br />
        <LinkSlide target="_blank" href="https://www.grc.earth">https://www.grc.earth</LinkSlide><br />
        Complexity Weekend<br />
        <LinkSlide target="_blank" href="https://www.complexityweekend.com">https://www.complexityweekend.com</LinkSlide><br />
        ETH Zürich – Systemics Design Labs<br />
        <LinkSlide target="_blank" href="https://systemicdesignlabs.ethz.ch">https://systemicdesignlabs.ethz.ch</LinkSlide><br />
        </>,
        <>
        Video Biomimicry Switzerland – “My
        biomimicry journey” <br />
        <Link target='_blank' href='https://www.youtube.com/watch?v=gsAHHDG1I4Y'>https://www.youtube.com/watch?v=gsAHHDG1I4Y</Link> <br />
        Video GRC – “Introduction to biomimicry –
        open discussion” (coming soon)
        Podcast EEI (coming soon)
            <br/>
            GRC WorldWide CoWorking Session zu Biomimikry mit Michaela Emch ": <Link target='_blank' href='https://youtu.be/2XhlLstMeqI'>https://youtu.be/2XhlLstMeqI
        </Link><br/>
            "Diskussion über GRC Biomimicry" :<Link target='_blank' href='https://youtu.be/pDhyCg9RO0E'> https://youtu.be/pDhyCg9RO0E</Link>

        </>,
        <>
            Eclosions – Marketing &amp; Communication<br />
              Michaela Emch <br />
              Rte de Praly 4 <br />
              CH-1976 Aven <br />
              <Link href="mailto:info@eclosions.ch">info@eclosions.ch</Link> <br />
              +41 76 367 76 38</>,
        "Eine Nachricht schicken",
        "Name",
        "Vorname",
        "Adresse",
        "Postleitzahl",
        "Ort",
        "Land",
        "Deine E-Mail",
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

        "Nouvelles",

        "Contact",
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

        "News",

        "Contact",

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

        "Neuigkeiten",

        "Kontakt",

    ],
}


export function titre(lang, index) {
    return titleIn[lang][index - 1];
}
export function paragraphe(language, index){
    return sentencesIn[language][index - 1];
}