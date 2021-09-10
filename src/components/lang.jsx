import React from "react";
import { Link, RedText,LinkSlide} from "./Styles"
const frURL = " https://www.amazon.com/Vers-une-Communication-Bioinfusée-Biomimiétisme-ebook/dp/B0916QY7FQ/ref=sr_1_1?dchild=1&keywords=vers+une+communication+bioinfusée&qid=1622468018&s=digital-text&sr=1-1"

const enURL = "https://www.amazon.com/gp/product/B08WLTXRZS?pf_rd_r=WCC1QFVM4MGYSSVFBXQJ&pf_rd_p=5ae2c7f8-e0c6-4f35-9071-dc3240e894a8&pd_rd_r=8c85bc34-4f39-41d0-9bf7-a0c2cdc367e6&pd_rd_w=23yoe&pd_rd_wg=WcEBq&ref_=pd_gw_unk"

const open = true;


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
            <Link target="_blank" href="https://www.linkedin.com/in/michaelaemch/" style={{fontSize: '2rem', color: '#e21137'}}>Michaela Emch</Link>, spécialiste en communication
            et praticienne du biomimétisme.<br /> Auteur du livre 
            "Vers une
            communication bioinfusée – Le Guide pour
            une Communication Humaine Inspirée du
            Biomimétisme au XXIe Siècle".
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
            votre objectif. <br/>(Inspiré de la méthodologie du biomimétisme).
        </>,
        <>
        <LinkSlide target="_blank" href="https://biomimicryswitzerland.org">Biomimicry Switzerland</LinkSlide><br />
        <LinkSlide target="_blank" href="https://asknature.org"> Ask Nature</LinkSlide><br />
        <LinkSlide target="_blank" href="https://www.learnbiomimicry.com">LearnBiomimicry</LinkSlide><br />
        <LinkSlide target="_blank" href="https://www.systemsinnovation.io"> Systems Innovation</LinkSlide><br />
        <LinkSlide target="_blank" href="https://www.grc.earth">Global Regeneration CoLab</LinkSlide><br />
        <LinkSlide target="_blank" href="https://www.complexityweekend.com">Complexity Weekend</LinkSlide><br />
        <LinkSlide target="_blank" href="https://systemicdesignlabs.ethz.ch">ETH Zürich – Systemics Design Labs</LinkSlide><br />
        <LinkSlide target="_blank" href="https://futurevalue.global">Future Value Global</LinkSlide><br />
</>,
        <>
            <ul>
                <li> <Link target='_blank' href='https://www.youtube.com/watch?v=gsAHHDG1I4Y'>
                    Video Biomimicry Switzerland – “My
                    biomimicry journey”
                </Link> </li>
                <li> <Link target='_blank' href='https://youtu.be/2XhlLstMeqI'>GRC WorldWide CoWorking Session on Biomimicry with Michaela Emch
                </Link></li>
                <li> <Link target='_blank' href='https://youtu.be/pDhyCg9RO0E'> GRC Biomimicry Discussion</Link></li>
            </ul>
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
        "Commander le livre",

<>
            Vers une communication bioinfusée – le
            Guide pour une Communication Humaine
                Inspirée du Biomimétisme au XXIe Siècle <br />
            </>,
            //22
            <>
            <br />
            envoyez un message
                        (info@eclosions.ch) avec votre
                        adresse postale afin d'organiser
                        l'envoi et le paiement.</>,
            //23
            <>Version papier<p style={{fontSize: 12}} className='fontReduced'>Prix pour la version papier: CHF 25.- + frais de port</p></>,
            <>Version électronique</>,
            <>En savoir plus sur le livre </>,
            <>Commandez le livre:</>,
            <>Langue du livre</>

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
            <Link target="_blank" href="https://www.linkedin.com/in/michaelaemch/" style={{fontSize: '2rem', color: '#e21137'}}>Michaela Emch</Link>, communication specialist
            and biomimicry  practitioner.<br /> Author of the 
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
            your goal. <br />(Inspired by the biomimicry methodology).
        </>,
        <>
            <LinkSlide target="_blank" href="https://biomimicryswitzerland.org">Biomimicry Switzerland</LinkSlide><br />
            <LinkSlide target="_blank" href="https://asknature.org"> Ask Nature</LinkSlide><br />
            <LinkSlide target="_blank" href="https://www.learnbiomimicry.com">LearnBiomimicry</LinkSlide><br />
            <LinkSlide target="_blank" href="https://www.systemsinnovation.io"> Systems Innovation</LinkSlide><br />
            <LinkSlide target="_blank" href="https://www.grc.earth">Global Regeneration CoLab</LinkSlide><br />
            <LinkSlide target="_blank" href="https://www.complexityweekend.com">Complexity Weekend</LinkSlide><br />
            <LinkSlide target="_blank" href="https://systemicdesignlabs.ethz.ch">ETH Zürich – Systemics Design Labs</LinkSlide><br />
            <LinkSlide target="_blank" href="https://futurevalue.global">Future Value Global</LinkSlide><br />
        </>,
        <>
            <ul>
                <li> <Link target='_blank' href='https://www.youtube.com/watch?v=gsAHHDG1I4Y'>
            Video Biomimicry Switzerland – “My
            biomimicry journey”
        </Link> </li>
                <li> <Link target='_blank' href='https://youtu.be/2XhlLstMeqI'>GRC WorldWide CoWorking Session on Biomimicry with Michaela Emch
                </Link></li>
                <li> <Link target='_blank' href='https://youtu.be/pDhyCg9RO0E'> GRC Biomimicry Discussion</Link></li>
            </ul>
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
              "Order the book",

               //21
               <>
                    From Nature’s Mouth – The Handbook for
                    Bioinfused Human Communication<br /> 
                    </>,
                    //22
                    <>
                   <br />
                    please drop a line
                    (info@eclosions.ch) with your postal
                    address in order to organize the
                    shipping and payment.</>,
              //23
              <>Paper version <p style={{fontSize: 12}} className='fontReduced'> Price for paperback: CHF 25.- + shipping</p></>,
              <>Electronic version</>,
              <>Learn more about the book </>,
              //27 
              <>Order the Book:</>,
              <>Language of the book</>
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
            <Link target="_blank" href="https://www.linkedin.com/in/michaelaemch/" style={{fontSize: '2rem', color: '#e21137'}}>Michaela Emch</Link>, Kommunikationsspezialistin und
            Biomimikry-Praktikerin.<br /> Autorin des Buches  "From Nature's Mouth
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
            besten erreichen können. <br />(Inspiriert von der Biomimikry-Methodik).
        </>,
        <>
            <LinkSlide target="_blank" href="https://biomimicryswitzerland.org">Biomimicry Switzerland</LinkSlide><br />
            <LinkSlide target="_blank" href="https://asknature.org"> Ask Nature</LinkSlide><br />
            <LinkSlide target="_blank" href="https://www.learnbiomimicry.com">LearnBiomimicry</LinkSlide><br />
            <LinkSlide target="_blank" href="https://www.systemsinnovation.io"> Systems Innovation</LinkSlide><br />
            <LinkSlide target="_blank" href="https://www.grc.earth">Global Regeneration CoLab</LinkSlide><br />
            <LinkSlide target="_blank" href="https://www.complexityweekend.com">Complexity Weekend</LinkSlide><br />
            <LinkSlide target="_blank" href="https://systemicdesignlabs.ethz.ch">ETH Zürich – Systemics Design Labs</LinkSlide><br />
            <LinkSlide target="_blank" href="https://futurevalue.global">Future Value Global</LinkSlide><br />
        </>,
        <>
            <ul>
                <li> <Link target='_blank' href='https://www.youtube.com/watch?v=gsAHHDG1I4Y'>
                    Video Biomimicry Switzerland – “My
                    biomimicry journey”
                </Link> </li>
                <li> <Link target='_blank' href='https://youtu.be/2XhlLstMeqI'>GRC WorldWide CoWorking Session on Biomimicry with Michaela Emch
                </Link></li>
                <li> <Link target='_blank' href='https://youtu.be/pDhyCg9RO0E'> GRC Biomimicry Discussion</Link></li>
            </ul>
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
        "Bestellen Sie das Buch",
        

                       //21
                       <>
                       From Nature’s Mouth – The Handbook for
                        Bioinfused Human Communication (Buch auf Englisch)<br />
                       </>,
                       //22
                       <>
                      <br />
                      bitte schreiben Sie
        eine Zeile (info@eclosions.ch) mit
        Ihrer Postadresse, um den Versand
        und die Bezahlung zu organisieren.</>,
                 //23
                 <>Papierversion<p style={{fontSize: 12}} className='fontReduced'>Preis für die Papierversion: CHF 25 + Porto</p></>,
                 <>Elektronische Version</>,
                 <>Lernen Sie mehr über das Buch </>,
                 <>Bestellen Sie das Buch:</>,
                 <>Sprache des Buches</>
    ]
}

const titleIn = {
    fr: [
        <>
            Osez la communication <br /> <RedText>bioinfusée</RedText>!
        </>,

        "Marketing & Branding",

        <><>Formation &</> <br/> <>Esprit d'équipe</></>,


    <>Traduction & <br/>Adaptation culturelle</>,

        "Que pouvez-vous attendre ?",

        <><span className="guide">Qui vous guide ?</span><LinkSlide target="_blank"  href={enURL} style={{color: '#e21137', textDecoration: 'none', fontSize: '3rem'}}>Qui vous guide ?</LinkSlide></>,


        <>Qu'est-ce que la communication <br />bioinfusée ? </>,

        <>Pourquoi une communication bioinfusée?</>,

        "La méthode",

        "Nouvelles",

        "Contact",
        "Notre écosystème",
        "Languages",
        "Le livre",
        "Contact"
    ],
    en: [
        <>
            Dare to engage in <br/>
            <RedText> bioinfused</RedText>  communication!
        </>,

        "Marketing & Branding",

        <>Training & Teambuilding</>,

        <>Translation & <br/>Cultural adaptation</>,

        "What can you expect?",

        <><span className="guide">Who guides you ?</span><LinkSlide target="_blank"  href={enURL} style={{color: '#e21137', textDecoration: 'none', fontSize: '3rem'}}>Who guides you?</LinkSlide></>,

        <>What is it?</>,

        <>Why bioinfused communication?</>,

        "The method",

        "News",

        "Contact",

        "Our ecosystem",
        "Languages",
        "The book",
        "Contact"
    ],
    du: [
        <p style={{transform: 'translate(0,-50%)'}}>
            Trauen Sie sich an die 
            <br /><RedText>bioinfundierte</RedText> Kommunikation heran!  
        </p>,

        "Marketing & Branding",

        <>Schulung & Teambuilding</>,

        <>Übersetzung & <br/> Kulturelle Anpassung</>,

        "Was können Sie erwarten?",

        <><span className="guide">Wer begleitet Sie?</span><LinkSlide target="_blank"  href={enURL} style={{color: '#e21137', textDecoration: 'none', fontSize: '3rem'}}>Wer begleitet Sie?</LinkSlide></>,


        <>Was ist bioinfundierte Kommunikation?</>,

        <> Warum bioinfundierte Kommunikation?</>,

        "Die Methode",
        "Neuigkeiten",
        "Kontakt",
        "Unser Ökosystem",
        "Sprachen",
        "Das Buch",
        "Kontakt"

    ],
}


export function titre(lang, index) {
    return titleIn[lang][index - 1];
}
export function paragraphe(language, index){
    return sentencesIn[language][index - 1];
}