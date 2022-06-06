import React from "react";
import "../css/detailed-article.css";
import headimg from "../images/blog/article-thumbnails/metaverse-blog-image.png";

const MetaContent = () => {
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
              Girl wearing a virtual reality headset. Credit:{" "}
              <a
                style={{ textDecoration: "none" }}
                href="https://pixabay.com/vectors/girl-virtual-reality-headset-6354292/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pixabay
              </a>{" "}
            </h6>
          </div>
        </div>
        {/* Article */}
        <section className="article container pb-5">
          <h3>Will the metaverse augment reality or replace it?</h3>
          {/* Author name + date */}
          <div className="pb-4">
            <span className="pb-3 mr-3">
              {" "}
              <a style={{ textDecoration: "none" }} href="/blogs">
                Lawrence Weru
              </a>{" "}
            </span>
            <span>Dec 11, 2021</span>
          </div>
          {/* Article text */}
          <p>
            "Meat averse? No, I haven't seen any posts about that," says my
            friend's uncle as he eats his sausage and pancakes breakfast while
            showing me his Twitter feed. It's the morning after attending the
            FSU vs NC State football game, in the weeks following the
            announcement of Facebook{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://about.fb.com/news/2021/10/facebook-company-is-now-meta/"
              target="_blank"
            >
              {" "}
              renaming to Meta.{" "}
            </a>{" "}
            The rest of us are still waiting for our breakfast at the Bada Bean,
            a popular brunch spot along one of Tallahassee’s main gateway roads,
            so I'm checking to see if the metaverse has reached his Twitter
            verse -- his primary news source. It hasn’t. But with Meta's $10B
            commitment, this once niche word now occupies headlines at{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://time.com/6116826/what-is-the-metaverse/"
              target="_blank"
            >
              Time
            </a>{" "}
            magazine, the{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://apnews.com/article/meta-facebook-explaining-the-metaverse-f57e01cd5739840945e89fd668b0fa27"
              target="_blank"
            >
              Associated Press
            </a>{" "}
            , and the{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.nytimes.com/2021/11/15/opinion/sway-kara-swisher-hans-zimmer.html"
            >
              {" "}
              New York Times
            </a>{" "}
            . While it’s been given credence by the Newspaper of Record, the red
            squiggly line underneath it when I type it underscores its current
            state -- not quite, not yet, or not at all. Zuckerberg says it's
            five years away. Some say that's optimistic. Others say it's been
            here all along. But on this Sunday morning, as I reflect on
            yesterday's football festivities and foresee a fresh-cooked country
            skillet sizzling in my immediate and certain future, I question how
            a metaverse will fit in. Will it augment our experiences as
            minimally-intrusive as a Twitter feed on a phone resting between two
            people on a dinner table, or will it replace these experiences
            entirely? That weekend, most of us make a trip to get there. My two
            and a half hour trip reconnects me with people I haven't seen in a
            while, a campus I haven't tailgated on in a while, and a stadium I
            haven’t lost my voice to in a while. The couple tailgating next to
            us are from Gainesville. They grew up in North Carolina and
            Louisiana, each. Their hot and spicy gumbo and friendly conversation
            warm us up during that unusually cold and wet Florida Saturday. The
            others in our party are returning from a cross-country road trip,
            arriving in their camper from St. Augustine. They energetically
            share stories of their journey through the historic Route 66,
            sailing off the shores of the west coast, and driving through
            redwoods. A memorable trip.
          </p>
          <p>
            The metaverse should need no introduction at this point, given its
            overwhelming mainstream press coverage. Excluding the plethora of
            third party coverage, Facebook’s hour long Connect event focusing on
            the metaverse has been visited by over twelve million viewers on
            Facebook, and three million on Youtube alone. While there is no
            single definition, most definitions of the metaverse are comparable
            to a trip. It’s a trip, like going on a journey, but without going
            anywhere physically. And it’s a trip, like seeing what isn't there;
            a hallucination. The working definition that this story uses is a
            collection of virtual worlds that you can visit, explore, play,
            work, and make transactions in, using your avatar, which is a
            virtual representation of yourself. Your avatar can go from virtual
            world to virtual world while keeping its possessions. The metaverse
            interacts with the physical world with varying degrees of
            immersiveness. For example, you can put on VR goggles and immerse
            yourself inside a metaverse world, or someone can visit you in your
            physical space via the metaverse, as a hologram visible through AR
            glasses.
          </p>
          <h4>The Metaverse’s potential stakeholders </h4>
          <p>
            While the metaverse is speculative, several tech industry players
            already have a stake in it. Some have argued that the power of the
            metaverse rests in the hands of two major game engines. One is
            Unreal Engine, a decades-old engine originally developed by Epic
            Games for the game Unreal Tournament and later adopted to build
            Fortnite, among other popular games. Another is Unity, which Pokémon
            Go and Beat Saber are built on. If the metaverse is a collection of
            virtual worlds, it is thought that these game engines will be the
            major underlying operating systems of the virtual worlds -- much
            like Unix and Windows are the major operating systems of the
            web-servers hosting today’s websites. Power could also rest in the
            creators of tomorrow’s AR and VR consumer devices. While there are
            several theorized access points to the metaverse, one of its
            defining characteristics is immersivity; the visceral feeling of
            presence. If immersivity in digital media is a spectrum from least
            to greatest, asynchronous text communications over a flat screen
            such as e-mail are on one end, and real-time VR and AR with spatial
            interaction and physical stimulation are on the other. It is assumed
            that AR and VR will be major access points for engaging in the
            metaverse. Several companies are actively operating in the AR/VR
            hardware space, including Meta, Apple, and Microsoft. Haptic
            feedback wearables are also undergoing research and development,
            which would make interacting with virtual objects more intuitive and
            shaking someone’s virtual hand feel more physical.
          </p>
          <p>
            Since your avatar is meant to be able to travel from virtual world
            to virtual world, power could also rest in the platforms that
            provide the avatars to users. Most people aren’t skilled in using
            Blender or other 3D modeling tools, so they would likely need to use
            a service to create and manage their 3D avatar. While it’s too early
            to say how the cross-world avatars will be managed in the metaverse,
            there is some prior art. Avatars are analogous to the Single-Sign-On
            services seen in the modern web, where your Facebook login or your
            Google login allow you to bring in your name, email, and even
            profile photo everywhere you go, without having to explicitly
            register different user accounts. The existing entities best
            positioned to service cross-world avatars could be the virtual game
            worlds that already exist, where people already have avatars within
            their worlds. Or, a third party could serve as the avatar layer that
            enables users to bring their avatar from world to world. There would
            need to be a common set of standards, reminiscent of the way
            different web browsers formed standards bodies to decide how best to
            ensure web pages are displayed consistently between different
            browsers.
          </p>
          <p>
            Power could also rest on the financial platforms that facilitate
            commerce in the 3D virtual worlds. One notable virtual world is
            Decentraland. It’s a place where -- among other things -- people can
            buy and sell virtual parcels of land using “Mana”, the virtual
            world’s currency, which is also a tradeable cryptocurrency. Another
            metaverse world, Sandbox, is backed by the Etherium blockchain.
            Virtual land deals worth millions of dollars have been executed on
            both of those platforms. The buyers assume that those land parcels
            will be highly-trafficked prime real estate, situated along the main
            entrances and gateway roads that people visit or pass by when they
            navigate metaverse worlds. Thus, the metaverse can be seen as part
            of the emerging “Web 3,” characterized by decentralization,
            blockchains, and the cryptocurrencies and decentralized autonomous
            organizations that are built on top of them. If cryptocurrencies
            will be part and parcel to the metaverse, then exchange platforms
            such as Coinbase would play a role, since they’re where
            cryptocurrencies and tokens are traded. In addition to exchanges,
            platforms that make it easy to create and manage decentralized
            financial services could become stakeholders. Ex-Twitter CEO Jack
            Dorsey recently renamed his payments processing company from Square
            to Block, proclaiming a change in focus for the financial platform,
            and solidifying the serial entrepreneur’s commitment to blockchain
            technologies and decentralized finance.
          </p>
          <p>
            Much of the metaverse’s physical and digital systems remain to be
            built. Each stakeholder has their own{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://techcrunch.com/2021/11/11/tencent-metaverse/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAMqXhDbelDgFgPuzz6RaHeSv6boFa53clsW-TyS2UQxdeDL-64Cl7h7wmulXVBPr8GXAUZ_GMBti7uFXcTfAEMthgKTjJF8fHKdNF7KUxvVoZ89qvWk_3ccWOq4dO3Cyo4Vgj7PWOltt9zUAjkWnkdxzJQgxdB3morlk2f2z-7U3"
              target="_blank"
            >
              vision
            </a>{" "}
            for the metaverse, and those visions have their{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://podcasts.apple.com/gb/podcast/mark-zuckerbergs-metaverse-dream/id404893471?i=1000540132445"
              target="_blank"
            >
              critics
            </a>{" "}
            . To date, Facebook / Meta has planted the boldest flag, which could
            help give them an edge with recruiting top tech talent to build
            their vision, as well as with executing major mergers and
            acquisitions to help assemble their vision, both of which are part
            of their M.O.
          </p>
          <h4>How metaverse worlds can connect us</h4>
          <p>
            During their{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.facebook.com/Meta/videos/577658430179350/"
              target="_blank"
            >
              Connect
            </a>{" "}
            event, Meta presented their visions of the metaverse through a
            series of stories woven between monologues from Zuckerberg and
            dialogues with his company’s executives and guests. Like most
            predictions of the future, there are going to be things that we
            simply can’t predict. We can’t fathom the way that things will
            unfold, and the opportunities that they will create. However, for
            now, their vision of the metaverse includes everything from gaming
            together, to learning together, to working together. Their vision
            presumably also includes viewing ads together, although that’s the
            elephant in the room. In one Connect scene referenced by
            entrepreneurship influencer Gary Vaynerchuk in his recent{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.garyvaynerchuk.com/web3-metaverse-chat-with-mark-zuckerberg/"
              target="_blank"
            >
              interview
            </a>{" "}
            with Zuckerberg, a young woman at a concert captures a photo and
            posts it on Instagram. Then a friend sees the post and joins her at
            the concert. But virtually, as an avatar, via the metaverse. And
            instantly, without making a physical trip to the venue.
          </p>
          <p>
            When it’s difficult to make a trip to meet in person, anything that
            allows us to feel more present with each other presents a palatable
            value proposition. The Covid pandemic made it riskier to be
            physically present with each other. Until a Covid vaccine became
            massively available, many{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.washingtonpost.com/nation/interactive/2021/reunions-covid/"
              target="_blank"
            >
              friends and families were kept apart entirely
            </a>{" "}
            -- either due to public restrictions or personal ones. In response,
            many people connected over the internet. People held Zoom weddings,
            Zoom conferences, Zoom dissertation defenses, Zoom graduation
            ceremonies, and some even dated over Zoom. While Zoom is on a flat
            screen, the virtual spaces of the metaverse are meant to provide an
            immersive, visceral sense of presence; the closest thing to the real
            deal yet. So when people can’t meet in person, instead of a phone
            call or a Zoom call they may opt to connect within virtual 3D
            spaces, assuming it’s easy to do.
          </p>
          <h4>Possible consequences of the metaverse</h4>
          <p>
            One possible downside to Meta’s vision of the metaverse is the lack
            of true face time in the virtual worlds. During a Zoom call we can
            see the person’s real face. But in Meta’s vision of the metaverse,
            we often interact via an avatar, with VR goggles on. In a world
            where we can see someone’s real face on our social media platforms,
            as well as during video calls using apps like Facetime and the
            ubiquitous Zoom, interacting with a cartoonish representation of
            someone seems less real, in some aspects. It also opens up the
            possibility of getting catfished. One of the defining features of
            facebook was that it convinced people to use their real names and
            real photos on the internet. This was revolutionary at a time when
            most people navigated the web with screen names and profiles that
            hid their real identities. As a result of exposing our real names
            and faces to digital strangers, facebook created an online space
            where people behaved as if their online reputation could impact
            their real-world reputation. The greater web became more personable,
            as people became accustomed to representing their real identities
            online in other corners of the web. As Meta steps into the
            metaverse, the sense of trust, familiarity, and humanity that comes
            from a digital photobook of faces may be blurred in a cartoon avatar
            world.
          </p>
          <p>
            There is another concern raised by the concert scene during Meta’s
            Connect event. Being able to teleport into an event from the comfort
            of your own home and feel physically present may undermine the event
            itself. People make choices between things, and immersive digital
            experiences have competed with the real deal in the past. Growing up
            in Jacksonville, I suffered being a Jaguars fan for nearly two
            decades. While it was bad enough to experience disappointing season
            after disappointing season, the most disappointing part was planning
            to watch the game on TV only to discover that it’s not going to air.
            During this time, the most immersive technology at the time -- the
            big screen TV -- was becoming affordable, and thus ubiquitous in the
            homes of people who purchase NFL tickets. Living rooms turned into
            "home theaters." In this new media landscape, if a team was having a
            bad season, more fans would choose to watch the game at the comfort
            of their house, or someone else's. Why go all the way to the
            stadium, buy tickets, and pay astronomical prices for concessions
            just to watch their team lose to a middle of the road team, when
            they could watch their team lose for free surrounded by the comforts
            of home? To combat low ticket sales, the NFL policy at the time
            required the games that failed to sell 85% of tickets to be
            designated as "blackout" games, and to not air on TV. In at least
            one season, seven of eight of the Jaguars’ home games were blacked
            out. If the metaverse will be more immersive and visceral than
            anything we’ve seen, I wonder how being able to meta into a live
            event will impact physical attendance to less popular events, and
            also how venues will respond if people prefer the virtual experience
            over the physical one, or if attendees become live broadcasters,
            reducing ticket sales.
          </p>
          <h4>Metaverse can expand audiences</h4>
          <p>
            My prior example highlights a historical situation where fans have
            chosen to watch a live event from home instead of going to the live
            event. But for venues that have sold out tickets, opening up virtual
            seats could satisfy the audiences that couldn’t attend the physical
            event, in comparison to watching the event through a flat screen.
          </p>
          <p>
            In the two and a half hour drive back to Jacksonville, I think about
            these pros and cons of the metaverse’s propositions. It’s easy to be
            a critic on the sidelines, but these visionaries are building out
            their visions, and putting up billions of dollars where their mouth
            is. However, as I try to avoid the drowsy trance of hypnosis that
            comes from staring down the endless strip of asphalt parting the
            endless woods around me, one thought lingers. If I could have simply
            meta'd myself into yesterday’s tailgate and football game from the
            comfort of my own home, would I have made the 160 mile drive to
            Tallahassee that weekend? On this day my answer is a resounding yes.
            No virtual experience can compare to actually being there. I would
            rather be in Doak for a game, or at least a friendly sports bar. But
            what if I couldn’t? There have been several FSU games that I’ve
            watched by myself from home, while following the discussions on
            social media. If I had to choose between that and being teleported
            into Doak virtually, I’d probably choose the more immersive
            experience and join my tribe from afar.
          </p>
        </section>
      </div>
    </>
  );
};
export default MetaContent;
