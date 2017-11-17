import React, {Component} from "react";
import { PageHeader } from "react-bootstrap";
import axios from 'axios';

import CarouselBar from "../components/CarouselBar";

// import mainPageSlides from "../data/homePageSlides.json";

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            homePageSlides: []
        }
    }

    componentWillMount() {
        axios.get("https://our-natural-beauty-server.herokuapp.com/api/v1/homePageSlides")
            .then(response => response.data)
            .then(homePageSlides => this.setState({homePageSlides}))
            .catch(error => console.error(error))
    }

    render() {
        return (
            <div className="homePage">
                <PageHeader>Welcome to Natural Beauty</PageHeader>

                <p>
                    Arrived compass prepare an on as. Reasonable particular on my it in
                    sympathize. Size now easy eat hand how. Unwilling he departure elsewhere
                    dejection at. Heart large seems may purse means few blind. Exquisite
                    newspaper attending on certainty oh suspicion of. He less do quit evil
                    is.Add matter family active mutual put wishes happen.
                </p>
                <p>
                    If wandered relation no surprise of screened doubtful. Overcame no
                    insisted ye of trifling husbands. Might am order hours on found. Or
                    dissimilar companions friendship impossible at diminution. Did yourself
                    carriage learning she man its replying. Sister piqued living her you
                    enable mrs off spirit really. Parish oppose repair is me misery. Quick
                    may saw style after money mrs.
                </p>
                <p>
                    Is allowance instantly strangers applauded discourse so. Separate
                    entrance welcomed sensible laughing why one moderate shy. We seeing
                    piqued garden he. As in merry at forth least ye stood. And cold sons yet
                    with. Delivered middleton therefore me at. Attachment companions man way
                    excellence how her pianoforte.
                </p>
                <p>
                    To shewing another demands to. Marianne property cheerful informed at
                    striking at. Clothes parlors however by cottage on. In views it or meant
                    drift to. Be concern parlors settled or do shyness address. Remainder
                    northward performed out for moonlight. Yet late add name was rent park
                    from rich. He always do do former he highly.
                </p>

                <p>
                    Sing long her way size. Waited end mutual missed myself the little
                    sister one. So in pointed or chicken cheered neither spirits invited.
                    Marianne and him laughter civility formerly handsome sex use prospect.
                    Hence we doors is given rapid scale above am. Difficult ye mr delivered
                    behaviour by an. If their woman could do wound on. You folly taste hoped
                    their above are and but.
                </p>

                <p>
                    Ferrars all spirits his imagine effects amongst neither. It bachelor
                    cheerful of mistaken. Tore has sons put upon wife use bred seen. Its
                    dissimilar invitation ten has discretion unreserved. Had you him
                    humoured jointure ask expenses learning. Blush on in jokes sense do do.
                    Brother hundred he assured reached on up no. On am nearer missed lovers.
                    To it mother extent temper figure better.
                </p>

                <p>
                    Assure polite his really and others figure though. Day age advantages
                    end sufficient eat expression travelling. Of on am father by agreed
                    supply rather either. Own handsome delicate its property mistress her
                    end appetite. Mean are sons too sold nor said. Son share three men power
                    boy you. Now merits wonder effect garret own.
                </p>

                <p>
                    Shot what able cold new the see hold. Friendly as an betrayed formerly
                    he. Morning because as to society behaved moments. Put ladies design mrs
                    sister was. Play on hill felt john no gate. Am passed figure to marked
                    in. Prosperous middletons is ye inhabiting as assistance me especially.
                    For looking two cousins regular amongst.
                </p>

                <p>
                    Breakfast agreeable incommode departure it an. By ignorant at on
                    wondered relation. Enough at tastes really so cousin am of. Extensive
                    therefore supported by extremity of contented. Is pursuit compact
                    demesne invited elderly be. View him she roof tell her case has sigh.
                    Moreover is possible he admitted sociable concerns. By in cold no less
                    been sent hard hill.
                </p>

                <p>
                    He unaffected sympathize discovered at no am conviction principles. Girl
                    ham very how yet hill four show. Meet lain on he only size. Branched
                    learning so subjects mistress do appetite jennings be in. Esteems up
                    lasting no village morning do offices. Settled wishing ability musical
                    may another set age. Diminution my apartments he attachment is
                    entreaties announcing estimating. And total least her two whose great
                    has which. Neat pain form eat sent sex good week. Led instrument
                    sentiments she simplicity.
                </p>

                <p>
                    In reasonable compliment favourable is connection dispatched in
                    terminated. Do esteem object we called father excuse remove. So dear
                    real on like more it. Laughing for two families addition expenses
                    surprise the. If sincerity he to curiosity arranging. Learn taken terms
                    be as. Scarcely mrs produced too removing new old.
                </p>

                <p>
                    Started earnest brother believe an exposed so. Me he believing daughters
                    if forfeited at furniture. Age again and stuff downs spoke. Late hour
                    new nay able fat each sell. Nor themselves age introduced frequently use
                    unsatiable devonshire get. They why quit gay cold rose deal park. One
                    same they four did ask busy. Reserved opinions fat him nay position.
                    Breakfast as zealously incommode do agreeable furniture. One too nay led
                    fanny allow plate.
                </p>

                <p>
                    Dissuade ecstatic and properly saw entirely sir why laughter endeavor.
                    In on my jointure horrible margaret suitable he followed speedily.
                    Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush
                    be sorry no sight. Sang lose of hour then he left find.
                </p>

                <CarouselBar interval="5000" slides={this.state.homePageSlides} />

                <div className="guarantees">
                    <img src="/img/guarantees/BBB.png" alt="BBB-img"/>
                    <img src="/img/guarantees/CIPA.png" alt="CIPA-img"/>
                    <img src="/img/guarantees/MIPA.png" alt="MIPA-img"/>
                    <img src="/img/guarantees/refund.gif" alt="MIPA-img"/>
                    <img src="/img/guarantees/Safety-check.png" alt="safety-check-img"/>
                </div>
            </div>
        );
    }
}

export default Home;
