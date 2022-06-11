import React from "react";
import "../css/detailed-article.css";
import headimg from "../images/blog/article-thumbnails/artificial-intelligence-blog-image.png";
import img from "../images/blog/detailed-articles/artificial-intelligence.png";
const ArtContent = () => {
  return (
    <>
      <div>
        {/* Header */}
        <div className="container">
          {/* Buttons */}
          <div className="row container">
            <a
              style={{ textDecoration: "none" }}
              className="back-button"
              href="/blogs"
            >
              {" "}
              &lt; &nbsp; Back
            </a>
          </div>
          {/* Cover photo */}
          <div className="py-5">
            <img className="img-fluid" src={headimg} alt="" />
            <h6 className="cover-caption">
              Computer chip in the shape of a brain. Credit:
              <a
                style={{ textDecoration: "none" }}
                href="https://pixabay.com/vectors/anatomy-biology-brain-thought-mind-1751201/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pixabay
              </a>
            </h6>
          </div>
        </div>
        {/* Article */}
        <section className="article container pb-5">
          <h3>
            Artificial intelligence development is an interdisciplinary
            endeavor.
          </h3>
          {/* Author name + date */}
          <div className="pb-4">
            <span className="pb-3 mr-3">
              <a style={{ textDecoration: "none" }} href="/blogs">
                Maxim Goryunov{" "}
              </a>
            </span>
            <span>Dec 11, 2021</span>
          </div>
          {/* Article text */}
          <p>
            Throughout history, humanity has not seen changes on the same scale
            as what we are witnessing now. The digital transformation of the{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.weforum.org/agenda/2016/01/the-fourth-industrial-revolution-what-it-means-and-how-to-respond/"
              target="_blank"
            >
              Fourth Industrial Revolution
            </a>{" "}
            is not just the introduction of new technologies, it goes deeper and
            involves a shift in mindset, behavior and culture. Its protagonist,
            artificial intelligence, is gaining momentum - it's a fait accompli.
            But how many are thinking about what it will lead to and what
            questions the development of AI poses to society? Should it be seen
            as an interdisciplinary component, including questions of sociology
            and philosophy? There is no clear answer if the current world
            situation represents Taleb's "Black Swan", although attention to
            nowadays impact is crucial.
          </p>
          <p>
            Undoubtedly, viewing the success of digitalization can come from
            many angles. However, the most influential of these is automation.
            AI technology accompanies people in medicine, economics, education,
            science, retail, automotive and manufacturing. Researchers and
            entrepreneurs, in fact, don't have enough of it. Some are saying
            that the use of AI should be encouraged, thereby enhancing human
            capabilities. Others, and this is really another vector, about
            creating machines that will understand us on a psychological level.
            A third group scares people with a technological singularity. Going
            back 5 years, media headlines were increasingly focused on the
            coming dystopia/utopia of artificial intelligence. Consequently, the
            average person is faced with the question of who is to be believed.
            Naturally, the decision to attend a Miku Hatsune concert is a
            personal matter. Nevertheless, let’s pause for a moment and
            appreciate how far technology has come. Where is the fine line
            between understanding that intelligent automation is a supplement to
            human effort, not a replacement for it, and whether it should be
            seen as a panacea?
          </p>
          <h4>
            The history of artificial intelligence development and what we
            should expect from it
          </h4>
          <p>
            The term 'artificial intelligence' appears in many{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.vox.com/conversations/2017/3/8/14712286/artificial-intelligence-science-technology-robots-singularity-automation"
              target="_blank"
            >
              different contexts today.
            </a>{" "}
            Since the mid-1930s, when Alan Turing published his{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf"
              target="_blank"
            >
              work
            </a>{" "}
            on devices that could solve fairly complex problems, the global
            scientific community has been interested in the problem of AI. At
            Turing's suggestion, an intelligent machine is defined as one that
            cannot be distinguished from a human being. Conversely, the American
            scientist John Searle, in his article{" "}
            <a
              style={{ textDecoration: "none" }}
              href="http://cogprints.org/7150/1/10.1.1.83.5248.pdf"
            >
              {" "}
              "Mind, Brain and Programs"
            </a>{" "}
            , which has become chrestomatically famous, turned to criticism of
            the theoretical claims of artificial intelligence. His "Chinese Room
            " experiment suggests that artificial intelligence cannot be equated
            with natural intelligence, as the principles of their operation are
            quite different. Thus, he refutes the "strong version" of artificial
            intelligence, which suggests that a computer can have the ability to
            think and comprehend on a par with a human. At the same time, Searle
            supports the "weak version" of artificial intelligence, according to
            which mental processes can be modeled by a computer program. The
            experiment provoked a considerable academic backlash and an intense
            debate which is still going on. In particular, many critics have
            pointed out that Searle in his experiment inappropriately identifies
            the person in the room with the subject of Chinese comprehension,
            which should, in their view, be recognized as the entire system
            consisting of the room, the rulebook and the person. The answer to
            who stands right is, at the moment, impossible to give. However, one
            conclusion can still be reached. To set up the human-machine
            relationship, we need to listen to a variety of experts who are able
            to agree on concepts and translate them into context. AI philosophy,
            being both a philosophy of science and a philosophy of technology,
            considers artificial intelligence as a phenomenon of society,
            culture and cognition, on the one hand, and tries to comprehend its
            nature and evaluate its impact on our reality, on the other.
            Therefore, not allowing our civilization to forget that the time of
            reflection has come.
          </p>
          <p>
            In a practical sense, AI is just a tool, but it has a high
            computational power. Since the{" "}
            <a
              style={{ textDecoration: "none" }}
              href="http://www-formal.stanford.edu/jmc/history/dartmouth/dartmouth.html"
              target="_blank"
            >
              Dartmouth Conference
            </a>{" "}
            , its potential is increasing day by day, solving a growing number
            of applications. The AlphaZero program, which is equally good at go,
            shogi and chess, with no basic knowledge, needs only 24 hours to be
            able to beat any person. More interestingly, AI has even mastered
            poker, where, unlike go, players may avoid acting without full
            knowledge of what their opponent knows or doesn't know, what cards
            they hold and what they can do. Amazingly and frighteningly, the{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://electricliterature.com/i-got-an-artificial-intelligence-to-write-my-novel"
              target="_blank"
            >
              OpenAI GPT-3
            </a>{" "}
            neural network writes poetry, music, and articles. Thus, full
            autonomy is not the ultimate goal for AI systems. The findings of
            the recently published interim results of the{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://ai100.stanford.edu/sites/g/files/sbiybj18871/files/media/file/AI100Report_MT_10.pdf"
              target="_blank"
            >
              "One-Hundred-Year Study on Artificial"
            </a>{" "}
            look at the broader areas in which AI is evolving and making a
            difference in people's work and lives: language processing, computer
            vision, mobility, robotics, healthcare, finance and decision-making.
            Artificial intelligence resources are evolving in value, which makes
            it more relevant to use them responsibly.
          </p>
          <p>
            According to Gartner's
            <a
              style={{ textDecoration: "none" }}
              href="https://www.gartner.com/en/articles/the-4-trends-that-prevail-on-the-gartner-hype-cycle-for-ai-2021"
              target="_blank"
            >
              "Hype Cycle for Artificial Intelligence, 2021"{" "}
            </a>
            report, the AI market is in a state of evolution, with a high
            percentage of innovation in the early upstream stage, referred to as
            the "innovation trigger". Thus, growing numbers of end users are
            considering a solution with more AI capabilities. Meanwhile,
            enhancing trust, transparency, fairness and verifiability becomes
            progressively important for stakeholders, and responsible AI helps
            to achieve this. The research company expects that by 2023, all
            personnel hired to develop and train AI will need to have a
            technology expertise that ensures ethical compliance,
            explainability, justice and respect for privacy. This requires small
            and wide data approaches that provide more robust analytics, reduce
            reliance on big data and help achieve a 360-degree view on problems.
            Institutions will be forced to change their attention from big data
            to small and wide data by 2025, which will give more context for
            analytics and make AI less data-intensive.
          </p>
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50%",
            }}
          >
            <img src={img} className="m-3" />
          </div>
          <h4>
            Priority areas for implementing AI and its role in transforming the
            economy.
          </h4>
          <p>
            From an economic perspective, revenues from the global artificial
            intelligence market are{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.statista.com/statistics/694638/worldwide-cognitive-and-artificial-intelligence-revenues/"
              target="_blank"
            >
              expected to reach $341.8 billion in 2021
            </a>{" "}
            . According to a{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.grandviewresearch.com/press-release/global-artificial-intelligence-ai-market?__cf_chl_jschl_tk__=pmd_fCbwyYDdaEMVlMXzqgO5K89keXgfBoYP4O7hAmWqloM-1635882605-0-gqNtZGzNAqWjcnBszQgR"
              target="_blank"
            >
              report by Grand View Research
            </a>{" "}
            , this volume is expected to reach $997.77 billion by 2028, at a
            CAGR of 40.2%. Investments related to digital transformation combine
            writing and refining new applications, reducing the implementation
            time of new releases, and interacting with various systems through
            API interfaces. Enterprises are facing significant changes in
            current methodologies and practices for managing hybrid IT
            infrastructures. Key to these shifts is a new framework called
            AIOps. Previously, we{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://harvardintechseattle.com/webinars.html"
              target="_blank"
            >
              hosted a webinar
            </a>{" "}
            in which Microsoft scientists talked about how to take this approach
            into cloud computing, the use of AI and product strategy. Indeed,
            new DevOps technologies are forcing programmers not only to take
            more control at the application level, but also to take
            responsibility for the overall state of the ecosystem and the
            interaction between services and AI infrastructure. Artificial
            intelligence for IT operations allows enterprises to analyze
            consumer behavior and better predict people's needs, leading to a
            more personalized experience. For instance, medicine as a science
            and branch of health care is experiencing the formation process
            called{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4204402/"
              target="_blank"
            >
              4P medicine
            </a>{" "}
            : personalized, predictive (predicting the probability of diseases),
            preventive (focusing on the prevention of disease development), and
            participatory (enabling the equality of doctor and patient
            positions). The arrival of AI in medicine has the potential to help
            solve a wide range of important problems in collecting and combining
            large amounts of scientific knowledge and clinical practice. It will
            give the development of medical and pharmacy practice, improving the
            effectiveness of management decisions in healthcare.{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.ibm.com/watson-health/solutions/cancer-research-treatment"
              target="_blank"
            >
              The Watson for Oncology module of the IBM
            </a>{" "}
            supercomputer is used to search the database (medical reports,
            diagnoses and pages of texts from medical journals and clinical
            trials in oncology), select multiple treatment options and make the
            physician choose the best one. At the same time, it gives staff
            members more time to focus on critical issues. Programs can pick up
            wards, search for available equipment, keep track of medical
            equipment.
          </p>
          <p>
            However, scientists, as has already been said, do not stop there. It
            is assumed that we will create machines that will understand us
            humans on a psychological level. These machines will be able to
            sense our inner states - emotions, attention, and character.
            Certainly, there are already many products and services that assess
            the human condition - for example, wearable devices that help
            monitor sleep quality. But empathy is not determined by the amount
            of data processed. Existing{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://link.springer.com/article/10.1007/s42979-021-00815-1"
              target="_blank"
            >
              deep learning methods
            </a>{" "}
            are inherently not well-suited for predicting things like mood and
            stress, which vary widely due to individual differences. To move
            forward, scientists suggest driving the work on the{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://arxiv.org/pdf/1511.05324v1.pdf"
              target
            >
              Human-Machine Understanding
            </a>{" "}
            concept, which involves assessing emotional states, including
            postures, facial expressions, physiological markers, and language in
            combination with the unique environment to reflect each individual.
            This topic is not only of applied nature, but also largely
            determines the further development of new interdisciplinary science,
            technology, economy and society. It involves neurobiologists and
            psychologists successfully joining forces with engineers.
          </p>
          <h4>
            The regulation of ethical problems assumes a relationship between
            machines and morality.
          </h4>
          <p>
            This widespread use of AI reinforces the dilemmas between privacy
            and human autonomy. The range of{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://hbr.org/2021/04/new-ai-regulations-are-coming-is-your-organization-ready"
              target="_blank"
            >
              legal (or legally relevant)
            </a>{" "}
            and{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://news.un.org/en/story/2021/09/1099972"
              target="_blank"
            >
              ethical problems
            </a>{" "}
            determined by the development and use of artificial intelligence
            technologies and units is quite extensive.
          </p>
          <p>
            From the perspective of legal regulation, it is possible to
            distinguish two main groups. The first includes the operation and
            use of artificial intelligence units in general. Their solution is
            mainly aimed at preventing harm to society and the individual from
            mass use. One primitive example: an unmanned car ran over a person.
            Whose fault was it? The programmer? The owner of the car or the
            manufacturer? Slightly less primitive, the use of{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://en.unesco.org/artificial-intelligence/mooc-judges"
              target="_blank"
            >
              AI as a judge
            </a>{" "}
            . Preventive regulation could significantly reduce the degree of
            uncertainty in risk management issues related to the legal
            responsibility for the actions of an AI unit. The second group looks
            at specific (socially useful) areas of activity. It could be the
            privacy of personal data in the provision of medical care, or the
            use of{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.govinfo.gov/content/pkg/FR-2021-03-31/pdf/2021-06607.pdf?utm_campaign=subscription+mailing+list&utm_source=federalregister.gov&utm_medium=email"
              target="_blank"
            >
              artificial intelligence in the banking sector
            </a>{" "}
            . Detailed legal regulation needs to be developed for each
            individual use of artificial intelligence. Given the dynamics of the
            development of technologies and AI units, flexible legal regulation
            in this group may be more effective. Public authorities may not have
            sufficient information at the stages of their early development to
            develop appropriate legal regulation. Formation of legal regulation
            of artificial intelligence technologies is only at the beginning,
            but it may evolve into full-fledged complex institutes of law and
            institutes of legislation, possibly even into branches and
            sub-branches of law and legislation.
          </p>
          <p>
            Meanwhile, the ethics of AI is emerging as an area of research.
            Developments in this area have led to the emergence of a number of
            initiatives. The global initiative of the{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://ethicsinaction.ieee.org"
              target="_blank"
            >
              Institute of Electrical and Electronics Engineers (IEEE)
            </a>{" "}
            is a particularly noteworthy one. Work has begun on the creation of
            regulatory and technical documents capable of laying the foundation
            for ethical patterns of "behavior" of AI systems. Studies in this
            area are leading to the creation of{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://standards.ieee.org/content/dam/ieee-standards/standards/web/documents/other/ead1e_glossary.pdf?utm_medium=undefined&utm_source=undefined&utm_campaign=undefined&utm_content=undefined&utm_term=undefined"
              target="_blank"
            >
              glossaries
            </a>{" "}
            . Their principles can be generally described as: the technology
            must not violate privacy, must not discriminate on any grounds, must
            not cause harm to its creator, must be fully controlled by him, and
            must not violate other human rights. An even more complex issue is
            related to the social adaptation of AI, the division of human and AI
            roles in the real sectors of the economy and social sphere, the
            mutual intellectual influence of human and artificial intelligence,
            which may lead not only to mutual enrichment, but also to new risks
            and challenges for future generations. Additionally, the document{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.romecall.org/wp-content/uploads/2021/02/AI-Rome-Call-x-firma_DEF_DEF_con-firme_.pdf"
              target="_blank"
            >
              Rome Call for AI Ethics
            </a>{" "}
            , signed in Rome by the head of the Roman Catholic Church, FAO (Food
            and Agriculture Organization of the United Nations), the Italian
            government, representatives of IBM, and Microsoft, was published in
            2020. The goal is to take a holistic and comprehensive approach to
            the technological future of humanity.
          </p>
          <p>
            Despite the serious challenges of implementing AI systems, the
            prospect of using them encourages the search for solutions to
            overcome the obstacles. Highly qualified specialists from around the
            world are constantly working on the development of this field. They
            are trying to understand how artificial intelligence can affect
            automation systems, national security, ethics, legislation, and the
            privacy of citizens. Indeed, artificial intelligence plays a key
            role in the future of technological development and we are forced to
            choose between great possibilities and great dangers at some point.
            The main conclusion is to consider artificial intelligence as an
            interdisciplinary field, encompassing linguistics, philosophy,
            neuroscience and psychology. In this way, it is possible to abandon
            the fantastic fear of "machine uprising" and build a utilitarian
            useful relationship between AI and humans.
          </p>
        </section>
      </div>
    </>
  );
};
export default ArtContent;
