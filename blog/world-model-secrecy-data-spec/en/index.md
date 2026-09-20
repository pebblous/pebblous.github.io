---
title: The Data Supplier Doesn
subtitle: Yann LeCun
date: 2026-09-21
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Data Supplier Doesn

_Yann LeCun_

## Executive Summary

> [!callout]
> A single story from Russell Brandom, AI editor at TechCrunch, published on September 18 and reworked two days later, reports an odd scene in the world model business. AMI Labs, founded by Yann LeCun, and World Labs, founded by Fei-Fei Li, have gathered plenty of attention and plenty of money, and the answers go vague at the question of who will buy the technology. This article looks at what that silence leaves behind, not for the companies building the models but for the company building the data.

> The line that lasts longest in the story came from a supplier rather than a model company. Alex de Vigan, chief executive of Physicl, which sells 3D training data to companies in this field, said the company still does not know exactly what its customers are building. More information would mean more useful data. That reads differently from the familiar diagnosis that there is not enough data. The volume and the skill are both in place, and what is missing is the thing the data should match.

> Sections 1 through 3 stay with what the story and the published material set out. Section 4 rereads the situation as a problem of data specifications, and that reading is this article's own rather than the story's.

### Key Figures

Sources: company announcements and press coverage. Individual sources are linked in the body.

<!-- stat-card -->
**$1.03 billion** — Seed round AMI Labs took — Announced in March 2026 at a pre-money valuation of $3.5 billion, the largest seed round on record out of Europe

<!-- stat-card -->
**3 to 5 years** — Horizon LeCun gave for general systems — LeCun told AFP that talks with corporate partners start within one to two years, and that fairly universal intelligent systems are the goal in three to five

<!-- stat-card -->
**$1.23 billion** — Total raised by World Labs — Another billion dollars arrived in February 2026 alongside the full launch of Marble, the first product. Autodesk anchored the round with $200 million

<!-- stat-card -->
**Millions** — Simulation-ready 3D assets Physicl opened with — Announced at NVIDIA GTC in March 2026. Friction, mass and collision properties are derived from the geometry and materials automatically

## Plenty of Money, No Named Product

Brandom wrote in the [story](https://techcrunch.com/2026/09/20/world-model-companies-are-keeping-a-lot-of-secrets/) about moderating the world model panel at the All In conference, an event unrelated to the podcast of the same name. The story names AMI Labs and World Labs as the two large players in the field, high on buzz and funding and fairly far down the list on any effort to earn revenue.

![Yann LeCun, founder of AMI Labs, speaking at a podium](./image/img-01-yann-lecun.jpg)
*▲ Yann LeCun left Meta to found AMI Labs in Paris in December 2025 | Photo: Jérémy Barande (CC BY-SA 2.0), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Yann_LeCun_-_2018_(cropped).jpg)*

The story describes the core of a world model as handling spatial intelligence automatically. Its simplest form is a map drawn so that the world can be moved through, like the model that drives a self-driving car. And the same approach that gets a car through traffic can also carry a box across a room for a humanoid robot. So the available directions run wide, from robotics to controllable video to harder forms of autonomous driving.

Wide directions also mean no direction has been picked. Pressed on where commercial use would actually show up first, the answers got cloudy, Brandom wrote. Michael Rabbat, who leads world models at AMI Labs, answered on the panel: "We'll talk about it when we're ready to talk about it." The reply that came back by email was no different: "We're still in a research and building phase, so we're not talking publicly about any product plans or timeline."

None of which says nobody is doing anything. By the story's account AMI Labs already has a foot in manufacturing, biomedicine and robotics, and reaches AI software for doctors through a partnership. Several areas have been touched, and which one turns into a product first goes unsaid.

World Labs talks comparatively more. Brandom called this company's Marble probably the most fully developed product in the space, with demos ranging from straightforward media creation to explorable environments for video games to CGI effects. Marble came out in a limited beta in November 2025 and launched fully in February 2026. That same month the company [raised another billion dollars](https://theaiinsider.tech/2026/02/19/fei-fei-lis-world-labs-raises-1b-in-fresh-funding-to-advance-development-of-world-models/). Autodesk anchored the round with $200 million, and Nvidia and AMD joined as well. Total funding reached $1.23 billion. What comes after this product is blank all the same.

## Why No One Speaks First

Two strands run through the explanation the story offers. One is competition and one is money.

The competitive logic is plain. Naming the use for a technology exposes the road to market, and once that road is visible a rival can raise money to travel it too. Brandom put it this way: "Cixin Liu fans will recognize this as a dark forest scenario: If you don't know who else is in the woods, it's best not to attract attention." Deep funding makes the calculation stronger rather than weaker. The money that bought the quiet is feeding potential competitors at the same time.

The money question is how long a company can afford to stay quiet. AMI Labs was set up in Paris in December 2025 and took [$1.03 billion as a seed round](https://techcrunch.com/2026/03/09/yann-lecuns-ami-labs-raises-1-03-billion-to-build-world-models/) three months later, in March 2026. The pre-money valuation was $3.5 billion, the largest seed round on record out of Europe. Chief executive Alexandre Lebrun told TechCrunch that this is "not your typical applied AI startup that can release a product in three months, have revenue in six months," describing a plan that starts from fundamental research. LeCun told AFP that talks with corporate partners would open within one to two years and that the goal within three to five years is to produce "fairly universal intelligent systems." Press accounts of the round describe a company expected to stay a research organization with nothing to sell for roughly five years.

One more thing sits on top of that. The phrase "world model" is itself still broad. Lebrun once predicted that "in six months, every company will call itself a world model to raise funding." A broad label lets an investment story hold together without specifying any use. The cost of keeping quiet drops by that much.

World Labs, for its part, has said a fair amount. On June 3, 2026 the company published a [taxonomy](https://drfeifei.substack.com/p/a-functional-taxonomy-of-world-models) that splits the term three ways. A renderer "outputs observations in the form of pixels meant for human eyes." A simulator "outputs state: a geometrically, physically or dynamically faithful representation of the world that humans and computer programs can both compute on and interact with." A planner "outputs actions." Of the three, the piece judged that "the simulator gets the least public attention, and is the most consequential of the three." Data comes up too. Three-dimensional data with explicit geometry, material properties and physical annotations is "orders of magnitude scarcer than the internet video that renderers train on," the piece noted.

![Cover illustration for World Labs' taxonomy post, showing a 2D picture from a renderer beside a 3D world a simulator computes on](./image/img-02-world-labs-taxonomy.jpg)
*▲ Cover art for World Labs' June 3, 2026 taxonomy post — a 2D picture from a renderer set beside the 3D world a simulator computes on | Source: [World Labs (Substack)](https://drfeifei.substack.com/p/a-functional-taxonomy-of-world-models)*

So even the shortage has been published. That still does not answer the question the company making the data is holding. What is scarce has been named, and how accurate that data has to be on which task before it earns its price remains open. A list arrived, not an assignment.

> [!callout]
> Put competition and funding together, the two strands above, and the silence at these companies is reasonable enough. Little is lost by saying nothing and much is lost by speaking. The arithmetic only balances inside the company boundary, though. Outside it are people whose work has to match whatever that company is building.

## The Cost Falls on the Side Making the Data

Brandom met Alex de Vigan, chief executive of Physicl, in a hallway at the same conference. Physicl is a French company that left stealth at NVIDIA GTC in March 2026, launched by members of the Nfinite team, who had handled 3D data for retail. At the starting line it [announced](https://www.prnewswire.com/news-releases/physicl-launches-the-data-infrastructure-layer-for-physical-ai-at-nvidia-gtc-302715165.html) a library of millions of 3D assets and environments ready to drop into a simulator, and pointed at three areas: robotics, world models, and models that handle images and language together. The same announcement lists Meta, DeepMind, World Labs and Getty Images among the teams the platform already supports. On [its own site](https://www.physicl.ai/) the company describes how those assets are built: raw inputs become physics-tagged 3D with "geometry cleaned, materials resolved, friction, mass, and collision properties derived automatically."

![Example of a simulation-ready 3D indoor scene built by Physicl](./image/img-03-physicl-3d-scene.jpg)
*▲ An example of the simulation-ready 3D scenes Physicl builds — geometry, materials and physics properties are tagged together | Source: [physicl.ai](https://www.physicl.ai/)*

The founding logic de Vigan set down in the announcement is clear. "Every major advance in AI has required a new data layer," and for physical AI the missing layer is "structured, spatially consistent, physics-aware data that models can actually learn from." A condition rides along at the end of that sentence. Existing is not enough; the form has to be one a model can take in.

And a company like that is working without knowing what its customers are building. That its data has been useful is known. What it was useful for is not. So de Vigan's remark reads as a statement about specifications rather than a complaint: "I wish they would tell us more. We could build more useful data if we knew what they were working on." The ability to build is blocked by an absence of purpose.

The difference shows up in a single asset. Say a warehouse bay gets built in 3D. If a robot arm will learn to pick things up there, the friction on the surfaces a hand touches, the mass of each object and the small deformation that appears under a grip all have to be right. If video or a game environment will be built from it, appearance and lighting and the variety of the scene come first. The cost multiplies several times over if both are matched at the highest level, and with neither one specified the asset falls a little short on both sides.
