---
---
<div id="banner">
  <t1> Internship Report </t1>
  <t1> Niene Boeijen </t1>
</div>

<div id="titlePage">
  <t1> Master Geo-Information Science</t1>
  
  <t1> & Remote Sensing </t1>
  
  
  <img src="img/drawline.png">
  
  <t1 > Building a Web-Based Geo-Visualization about Field-Names of Drenthe  </t1>


  <t2 > Wageningen University </t2>
  
  <img src="img/logo_wageningen_ur_.gif" width="300px">
  
  <t2>Waag Society</t2>
  
  <t2>Project Heritage & Location </t2>
  
  <img  src="img/WS_logo.jpg" width="300px" > 
 

 </div>
  
<t3> <i>Niene Boeijen</i> </t3>

<t3> <i> 900918-070-088 </i></t3>

<t3> July 2015  </t3>


<h1 class ="nocount"> Abstract</h1>

The amount of geospatial data is increasing rapidly. The magnitude and complexity of large geospatial datasets are a challenge to transform from information into knowledge. Geo-visualization is one of the tools to turn these heterogeneous data volumes into knowledge for a broader public. 
Also in the field of cultural heritage geo information systems is used more for conservation and safeguarding purposes. For cultural heritage the representation in the form of web-mapping is a suitable tool to make the data more open and promote heritage information. 
In this design oriented research an interactive web application is built to apply geo-visualization techniques to cultural heritage date sets. The case study is an area in Drenthe where field-names from the 18th century are collected. These field names tell us how the environment used to look, because they originate in the minds local inhabitants to navigate and communicate about their spatial orientation. The names often relate to landmarks and characteristics of the direct environment. Mostly, local altitude differences, vegetation and soil types. 
In the application the user is able to see the field names on a map and on a transect line, showing the relation of the field to the altitude of its direct environment. Through information texts, the user can relate the names to the characteristics of the surroundings. The goal is to preserve the living heritage of field-names, give the inhabitants of Drenthe the possibility to explore names that cannot be found in the real surroundings and turn the raw data that is only available to a small group of people, into knowledge for a broader audience about their landscape. 
The geo-visualization techniques were useful for the representation of the field names. Though every visualization of data needs a individual approach. 

<h2 class ="nocount"> Keywords</h2>
<p><b> Geo-visualization   Heritage   Drenthe   Field names   GIS  </b></p>
<h2 class ="nocount"> Abbreviations</h2>
<dl>
  <dt>AHN</dt><dd>Actueel Hoogtebestand Nederland</dd>
  <dt>H&amp;L</dt><dd>Heritage and Location Project</dd>
  <dt>CH</dt><dd>Cultural Heritage</dd>
  <dt> FIL </dt> <dd> Future Internet Lab </dd>
  <dt>GIS</dt><dd>Geo Information System</dd>
  <dt>ICH</dt><dd>Intangible Cultural Heritage </dd>
  <dt>RCE</dt><dd>Rijksdienst voor Cultureel Erfgoed</dd>
</dl>

<div id="toc"><h1 class = "nocount">Table of Contents </h1></div>

# Introduction

##Introduction
The amount of geospatial data has increased rapidly. Geospatial data is created and used increasingly every day in smart phones, digital maps, satellite navigation systems, websites, services and apps. Almost 60% of all data is geographically referenced. Next to that, the modern computer technologies provide better opportunities for institutions, organizations and citizens to create and use geospatial data. Already a wide range of domains, use geo information systems [GIS] for management and decision-making purposes and the fields of application are still expanding.(Cartwright, Miller, & Pettit, 2004; Hahmann & Burghardt, 2013; MacEachren & Kraak, 2001; Tensen, 2014)

The magnitude and complexity of data sets with geospatial reference are a challenge in information science. How to transform this data into information and subsequently into knowledge?  Data is a product of research, creation, collection and discovery. It is raw material, often boring, incomplete or inconsequential. It is not yet valuable as communication, for it is not a complete message. <a class="xref" href= "#dikw"> (see figure 1)</a>. Often audiences are presented with data instead of information.  According to Nathan Shedroff, successful communications do not present data. Communication is the process to get the story to the audience.
Geo-visualization is one of the tools to turn large heterogeneous geo data volumes from information into knowledge.  But geo-visualization to inform the general public is still in development. Geo-visualization integrates scientific visualization, cartography, image analysis, information visualization, data analysis and geographic information systems to provide methods and tools for visual exploration, analysis and presentation of geospatial data. (MacEachren & Kraak, 2001; Shedroff, 1999; Tensen, 2014)

<figure class="text-wrap-right" id="dikw">
  <img src="img/DIKWPyramid.jpg">
  <figcaption> DIKW pyramid, From data to wisdom</figcaption>
  <p><i>(Shedroff, 1999)</i></p>
</figure>

The web is being used to produce new visual applications, going beyond the status of maps and other representations of geographic information. The World Wide Web has become an extremely efficient channel for transferring data, and there is a need for creating user-centred geo designs to ensure that usable geospatial products are created and delivered. (Cartwright et al., 2004) This raises the interest for geo-visualization in publishing geo-referenced information on the web and getting the enormous amount of available data to the general public (Lin, Gong, & Wang, 1999; Tensen, 2014). Only a few methodologies specifically directed and web geo-visualizations emerge which emphasize the scientific information visualization techniques as a way to handle these very large and complex data sets. New visual forms and practices emerge, but how and why do they differ from the more conventional cartographic forms?

In this research, web geo-visualization is explored through a case study in the field of cultural heritage [CH].

Geospatial data and geo information systems provide big relevance for the field of cultural heritage conservation purposes. Safeguarding and exploiting CH is high on the agenda and includes the use of digital management systems. Before this was a hand-made task, but with the growing computer science there are new ways for the digital preservation, innovation and updating cultural heritage data. More and more central and local authorities responsible for cultural heritage use GIS as one of the main infrastructure components when digitalizing CH data. GIS systems provide a few possibilities; first, digitalizing CH data in a GIS system preserves the data, by presenting the digital records in the form of focusing on its relation to place. Geographical information systems have proved their potential to present and exploit cultural heritage data. Second, such a system can be used for research aims. Implementing analysis on the spatial correlation and relations of different datasets and enrich the knowledge already existing.  (Droj, 2010; Karavia & Georgopoulos, 2013; Lai, Luo, & Zhang, 2012; Meyer et al., 2007) Lastly, by enriching current datasets by linking it in space and time to other datasets, which do not contain exact location data but do contain a sense of place in the thematic data description. Assumption is that the place referred to in historical documents probably refer to the identical real-world place if they are related in name. (Deal, 2014; Droj, 2010; Meyer, Grussenmeyer, Perrin, Durand, & Drap, 2007; Petrescu, 2007)

For cultural heritage data, the issue of the representation of the results of inventories in mapping systems and updating and maintaining the data, remains open. Web-mapping applications can be used to make open access-easy to use formats, for the assessment and promotion of heritage data. Web-mapping is a suitable tool for visualizing and updating geo heritage data. In general, much of the spatial data being created and shared is strongly visual in nature, including photographs, video, maps and art (Elwood, 2011;  Martin, Reynard, Pellitero Ondicol, & Ghiraldi, 2014) 

As stated by Deal:

>Visualizations have the potential to greatly improve search and discovery for on-line collections, transforming how users interact with digital collections. Furthermore, changing technology is making it easier than ever to incorporate visualizations into search interfaces and websites. The time is ripe for cultural heritage institutions to begin experimenting with data visualization in earnest.

In the cultural heritage field, the temporal dimension plays an important role to explore data. (Cerasuolo, Cutugno, & Leano, 2012) Spatial-temporal data visualization assumes and important role in the data presentation to users. The three dimensional data form of geo data (spatial, temporal and descriptive) helps users understand and gain knowledge in the discovery process.

 The goal of this research is to build a web-application to visualize geographically referenced intangible cultural heritage [ICH] data. There for this will be a design-oriented research. The context is a dataset of field names that were used by the local citizens around 1800 to refer to specific agricultural fields or areas, in Drenthe, the Netherlands. The information about the landscape that is hidden in the names gives a lot of historic information. Yet, noticeable is that this data is only known to a few selected historians. (Spek, Elerie, & Kosian, 2009) The data was supplied by the *Rijksdienst voor Cultureel Erfgoed* and based on the book *“van Jeruzalem tot Ezelakker, levende veldnamen van de Drentse Aa”*.  More about the data will be described in <a class="xref" href="#field-names"> chapter 2.1. </a>
 
 This research is part of an internship at Waag Society for the project of Heritage & Location. <a class="xref" href="#heritage-and-location-project"> (see section 2.2.) </a> This report describes the work and the results for the development of a web-application for the project Heritage & Location.
 
## Objectives
The overall objective of this study is to build an attractive web-application for the project Heritage & Location to show its potential of visualizing intangible heritage data and preserving them. This will be done by using the case-study of field-names in Drenthe, the Netherlands.  To achieve this, the following sub-objectives have been defined:

1. Establish design requirements and specifications for the prototype application that will be developed.
2. Develop a prototype version of the web-application. 
3. Evaluate the prototype web-application according to the requirements from sub-objective 1. 

## Report structure
This report will exist of 7 chapters, including this introduction chapter.  Explaining how the prototype web-application is established.
The <a class="xref" href="#background-theory"> second chapter</a> explains some concepts for background information. First, the field names will be explained as well as the background of the Heritage & location project from Waag Society. After this a summary of some geo-visualization techniques and frameworks will be given. This is composed as a reference for the design requirements and serves as inspiration for the design of the application.  
The <a class="xref" href="#the-data">third chapter </a> shows the field-name data provided by the RCE which forms the case study for this research.
The <a class="xref" href="#method"> fourth </a> and<a class="xref" href="#results"> fifth chapter </a> provide per sub-objective, the methods and results. 
The last two chapters reflect on the findings and conclude the study as well as providing some suggestions and recommendation for further development. 
<a class="xref" href="#reportstruct"> Figure 2</a> illustrates the structure of this report. 

<figure id="reportstruct" >
  <img src="img/reportstructure.png"/>
  <figcaption>Structure of the report</figcaption>
</figure>

# Background theory

In this chapter, the concept of field-names in Drenthe is explained and their position in the cultural heritage field.  Because this research was conducted in the scope of the Heritage and Location project at Waag Society, this will also be elaborated on.
After this, a summary of some geo-visualization techniques and frameworks will be given. This is composed as a reference for the design requirements and serves as inspiration for the design of the application.  Starting with some static visualization forms, followed by dynamic and concluded with web-based interactive frameworks. 

## Field-names

A field-name is a toponym used for a small area of land or a certain surrounding. Mostly arable land, pasture lands, wastelands, uncultivated areas, hills, valleys, woodlands and swampy areas. The names are thought up by the local inhabitants for practical use in communication and spatial orientation. A field-name is often only existing in oral form and originates, develops or disappears while the environment changes. This makes field-names living heritage <a class = "xref" href="#intangible-cultural-heritage" > (see next section 2.1.1.) </a> and it exist only in people's memory. Therefore field-names fade away from daily lives and disappear with new generations. Written documentation of field-names date from the 17th, 18th and 19th century. Some names live through because they were taken up into official cadastre documentations or other landscape documentations. Nowadays, a new interest arises for field-names as they can tell us how the landscape used to look in the 18th century. Field-names contain words from landscape characteristics like which soil types, vegetation types or animals occurred. This link to specific landmarks or environmental characteristics tells us the origin on the name and tells us about how the landscape used to be. This information is highly important for nature conservation and heritage preservation. (Spek et al., 2009) They can be used for landscape design and planning, knowledge for historical research and inspiration source for artist.
A collection of field-names was gathered by assessing people's memories, old cadastre documents, maps and other collections. This mental map is now made tangible, by documenting as much as possible and digitalizing them into a GIS system. (Spek et al., 2009; Encyclopedie Drenthe Online, n.d.)

### Intangible Cultural Heritage

The field-names in Drenthe are called living heritage, which is one of the 4 kinds of cultural heritage categories according to *Volkscultuur* institution;

1.  The physical environment. Including monuments, archaeology sites and cultural landscapes.
2.  Paper heritage; Stored in archives and libraries in the form of paper documents, maps and books.
3.  Object collections, owned and displayed by museums. Only focusing on objects.
4.  Living heritage; habits, traditions, religions and cultural events that people experience.
From: (volkscultuur, nd)

Categories 1, 2 and 3 are tangible substances while category 4 is intangible heritage. UNESCO introduces the concept of intangible heritage data in 2003, to safeguard the importance of intangible cultural heritage and distinct it form tangible heritage and natural heritage. (UNESCO, 2003)
Intangible cultural heritage can be shortly explained as all traditions and rituals of normal life, which gives people a sense of identity and continuity. ICH is transmitted from generation to generation and can be constantly recreated by communities due to interaction with their environment. (UNESCO, 2003; Zeijden, 2011)
Intangible heritage is strongly depended on the features of space and influenced by the space. Of course these traditions, habits, etc., have a place where they take place. Or they are about a place, have a spreading, an origin, a continuation and can cover multiple places, through time. (Karavia & Georgopoulos, 2013)

This applies also for the field-names in Drenthe, which is oral living heritage. Originated with a strong influence of the direct environment it exists in.

##Heritage and Location project 
For this research takes place in the scope of the Heritage and Location [H&L] project at Waag Society, they both will be shortly explained.

###Waag Society

<figure class="text-wrap-left">
  <img src="img/WS_logo.jpg" width="200px"/>
  <figcaption>Waag Society </figcaption>
</figure>

Waag Society is an Institute for art, science and technology. They develop technical interventions for relevant social innovation. In 7 labs they conduct creative research in the form of projects; creative care lab, creative learning lab, future heritage lab, future internet lab, open design lab and open wet-lab. The Heritage & Location project <a class="xref" href="#heritage-and-location"> (see next section 2.2.2) </a> is part of the future internet lab [FIL]. The FIL focuses on the development of big and open data, making internet technology accessible and research the impact of the internet on society.
(Waag Society, n.d.)

###Heritage and Location

The project H&L is owned by the Rijksdienst voor het Cultureel Erfgoed [RCE] and at Waag Society in the FIL team, a historical-geo thesaurus and tools are developed. The H&L project aims to develop a uniform system to link CH collections to existing geometries, with the use of place indicators in the meta-data of the CH data. One of the tools is a historical-geocoder, to make heritage data, geo located and so link it in time and space to other heritage data sets and enrich knowledge. It combines multiple geo data sets with a time component and can be used easily to locate heritage data with a place notification. Big heritage collections with a place indication, though no geo data, can be linked to geometries. The goal of the H&L project is to know every place, administrative boundary, building and address that ever existed in the Netherlands. (Erfgeo, n.d., Erfgoed & Locatie, n.d.)

<figure id="schemeHL" >
  <img src ="img/EL-producten-en-diensten-schema_v8.jpg" height="400px"/>
  <figcaption> Scheme of Heritage and Location project: Products and Services. </figcaption>
</figure>

In <a class="xref" href="#schemeHL"> figure 4 </a> the overview of the H&L project is shown. Starting from the bottom with data sources, like cadastre maps, historical geo data and collections. This will be linked to the historical geocoder in a uniform way. So applications (top of the scheme) can easily search and find the geo data. Providing functions to search through time, location, bounding box, source, toponym etc. 
(Erfgeo, n.d., Erfgoed & Locatie, n.d.)

Examples of data that the geocoder contains are; old toponyms, disappeared villages, geometries of departments form 1830, urbanisation throughout the years, municipalities and their origin etc.

The data of the field-names can be regarded as a source of the H&L project. This has to be made uniform the system of the geocoder to eventually be able to build easy web-applications on top of the find API.  This has not been done in this research for the project was not fully developed at the stage. For the future, the data might be taken up into the H&L project.

##Geo-visualization

Geospatial data is data with a location, a connection to a location and oriented by their geographical relationships. Geo data has a nature of threefold: spatial, temporal and descriptive.
The spatial dimension can be used to interpret the spatial dimensions and relation of data entities, an absolute and enclosed *space* wherein the geographic phenomena exists. The temporal dimension can be used to interpret the change in the data through time. The thematic dimension is to interpret what the data is about, a property that can be measured and assigned. The data component only concerns the raw observational data, with location, time and attributes. (Mennis et al., 2000; Nöllenburg, 2007) 

Geo-visualization is a combination of communication, scientific information visualization, geographic information systems and cartography. It comes after the collection of data, transformations and analysis. See<a class="xref" href="#chain"> figure 5</a>. From the real world we go to data and all the modifications to the data to eventually visualize it, either on a computer or on paper. The perception of people will interpret the data and turns the data into knowledge. In general, every map is a selective representation of reality and subjected to the interpretation of the human eyes. (Dibiase et al., 1992; MacEachren & Kraak, 2001) 

<figure id="chain">
  <img src="img/chain.jpg"/>
  <figcaption> Geo processing chain and visualization series </figcaption>
</figure>

Geographical visualization can be used for 2 purposes; data exploration and information display. (Cartwright et al., 2004)  By interpreting graphic representations new knowledge can be created and this can be distributed by visual communication. The one is exploratory, while visual communication is explanatory. (Dibiase, Maceachren, Krygier, & Reeves, 1992) In <a class="xref" href="#chain">figure 5</a> the geo processing chain is combined with the series of visualization transformations, showing the position of visualization as exploration and communication. 

In the following sections, some forms and frameworks of geospatial visualization will be explained. Starting to the first forms of static cartographic visualizations, to dynamic and animated maps. Eventually to web-based map, providing possibilities for interaction and user-centred designs. 

###Static geospatial visualization
Geo data has three basic symbols to represent the data; points, lines and polygons. Selecting the right graphic characteristic for data display is a challenging issue. Effective symbolization requires human creativity and judgement.  The classic method for cartography is Bertin’s theory. This provides a classified system with four levels of data measurement and a list of graphic symbols that can be assigned to the visual variables. Bertin's graphic variables are locations, size, density/size, texture, colour, orientation and shape. After Bertin, other researchers have added to this method with more graphic variables. Morrison added more specifications on colour, existing out of hue, saturation and value. MacEachren (1995) added the term clarity; build up from crispness, resolution and transparency. Caivano (1990) adds more dimensions on texture, defining directionality, size and density of texture.

Deciding the right graphic variable to be assigned to a certain type of data helps the viewer in defining the perceptual properties. For example, ordinal data needs the perception of being ordered, quantitative data of being proportional.  While nominal data needs to be perceived as distinct categories. (Bertin, 2000; Caivano, 1990; Dibiase et al., 1992; MacEachren, 1995; Nöllenburg, 2007)

Bertin’s theory was designed in the context of static maps but is for a part the basis and seems applicable to the design of dynamic maps which require a set of dynamic graphic variables. Dynamic visual variables will only give the right results when combined with the traditional static visual variables. (Köbben & Yaman, 1996)

###Dynamic geospatial visualization
A few forms of dynamic geo-visualization can be named:

- Display of time or spatial temporal visualization 
- Animation
- Interaction

There are two categories of dynamic map display; temporal animation and non-temporal animation. In temporal animation, display time and world time are directly related.  While for non-temporal, no direct relation between display time and world time is present.  Kraak and Klomp give a slightly different categorization then Köbben & Yaman. An overview of the possible forms is shown in <a class="xref" href="#catphenom"> table 1</a>. (Dibiase et al., 1992; Köbben & Yaman, 1996; Nöllenburg, 2007)  

<p id="catphenom" class="table"> Categories of possible animations for dynamic phenomena. </p>

<table>
    <tr>
        <th colspan="2">Köbben & Yaman</th>
        <th colspan="2">Kraak & Klomp</th>
    </tr>
    <tr>
        <td rowspan = "3"> Temporal</td>
        <td rowspan = "3"> Direct relation between world time and display time</td>
        <td rowspan = "3"> Time-series </td>
        <td> World time </td>
    </tr>
    <tr>
      <td> Aggregated time </td>

    </tr>
    <tr>
      <td> Database time </td>

    </tr>
    <tr>
      <td rowspan = "2"> Non - Temporal</td>
        <td rowspan = "2"> No direct relation between world time and display time </td>
        <td colspan = "2"> Successive build-up </td>
    </tr>
    <tr>
    <td colspan="2"> Changing representations</td>
    </tr>
</table>

*Information from (Köbben & Yaman, 1996; Kraak & Klomp, 1996)*

 Also the dynamic categories can be divided into 2D and 3D animations. In this research we only work with 2D animations because of limited technology. Also in the theoretical frame work we will leave this out of consideration.

 Spatial temporal visualization and animation will be explained in the following sections. Interaction will be combined with web-based visualizations, for interaction is the key aspect of web-based maps. 

####Dynamic variables
Dynamic visualization variables are identified by Dibiase et al. (1992), MacEachren (1994), Köbben and Yaman (1996), and Blok (2000).
Dibiase states that dynamic variables can be used to emphasize the location of a phenomenon, emphasize the attributes or visualize change in the spatial, temporal or thematic dimensions. (Dibiase et al., 1992) Blok provides a framework for animated representation of dynamic geo-spatial phenomena. (Blok, 2000) They provide a range of dynamic visualization variables to be used for monitoring purposes of spatial temporal relationships and communication purposes of visualization.

 Starting with no change vs change. Change can happen in the spatial domain, the temporal domain or the thematic domain of the data.
 
<p id="catphenom" class="table"> Categories of possible animations for dynamic phenomena. </p>


<table>
	<tr>
        <th> Change in domain </th>
		<th> Variables </th>
		<th> Dimensions </th>
    </tr>
	<tr>
        <th rowspan = "6"> Spatial </th>
        <td> Appearance/disappearance </td>
		<td> Born and Die </td>
    </tr>
	<tr> 
		<td rowspan= "3"> Mutation </td>
		<td> in size or shape </td>
    </tr>
	<tr>
		<td> increase/decrease (interval ratio) </td>
	</tr>
	<tr>
		<td> grow, shrink </td>
	</tr>
	<tr> 
		<td rowspan="2"> Movement </td>
		<td >along trajectory </td>
    </tr>
	<tr> 
		<td>boundary shift </td> 
	</tr>
	
	<tr>
        <th rowspan="5"> Temporal </th>
        <td > moment in time </td>
	</tr>
	<tr> 
		<td>Pace </td>
	</tr>
	<tr> 
		<td>Duration </td>
	</tr>
	<tr> 
		<td>Sequence </td>
	</tr>
	<tr> 
		<td>Frequency </td>
	</tr>
	<tr>
        <th rowspan="2"> Thematic </th>
        <td> Mutation </td>
	</tr>
	<tr> 
		<td>Thematic change </td>
	</tr>
</table>


####Animation
Animated maps use time to add a visual dimension to the display. The scenes in an animation show the state of the data at one moment accordingly. Animation is a form of spatial-temporal visualizations and contains the two categories; temporal animation and non-temporal animation.  Animated maps contain dynamic variables such as scene duration, rate of change, scene order and contain hardly any interactive control. (Köbben and Yaman; MacEachren; Ormeling, 1996) 

Dynamic animated variables are:
  
  * Temporal position, when something is displayed.
  * Duration. how long is something displayed.
  * Order, the temporal sequence.
  * State of change.
  * Frequency or speed.
  * Synchronization. 
  
###Web based geospatial visualization 

With the emerging of web-based maps, the user is no longer depended on what the cartographer puts on the map. (Ogao & Kraak, 2002) With electronic maps, the user can navigate and explore the spatial data themselves with the given functionality. In a dynamic interactive visualization, the user pends between data presentation and exploration. (Ogao & Kraak, 2002) 

Knapp (1995) defined four visualization operation tasks to be considered for web-based maps; identify, locate, compare and associate. Identify is describing an object, locate indicates the search for an object whose identity was already know. Associate and compare is the ability to relate between two different objects.

To cover the four visualization operations the user interface for a web page should have the following basic components:

* Geo browser – the map. Spatial dimension. Let users navigate.
* Time bar – temporal dimension.
* Filters – selecting information, filter. Thematic dimension.

For making the map, web map software is needed to create a map in the browser. Here some possible web map frameworks will be discussed as a foundation for further decisions made in the methodology. Widely known map frameworks are OpenLayers, MapFish and Leaflet. (Steiniger & Hunter, 2013) 

OpenLayers is a library for WMS (tiled layers) and WFS (vector layers). It implements a JavaScript API for visualization of spatial data in the web browser. Without a server-side component.
(Steiniger & Hunter, 2013) (http://openlayers.org/)

MapFish, is an open source web mapping framework for building rich web-mapping applications. MapFish provides specific tools for creating web services that allows querying and editing geographic objects. (Steiniger & Hunter, 2013)  (http://mapfish.org/)

Leaflet is a web-map service WMS, that returns geo-referenced rasterized maps or tiles. In this context a map is considered a two-dimensional visualization of features in the common formats jpeg or tiff. Leaflet is open-source JavaScript library for interactive maps. (http://leafletjs.org)


### Interactive geospatial visualization
Interactivity is one of the key aspects of web-based geo visualization. A map is nowadays seen as an interactive interface. Interactivity lets the user explore the geo-data and be in control and not depended on the cartographer.  Interaction empowers the viewer/user to modify the data display. (Dibiase et al., 1992; Nöllenburg, 2007; Ogao & Kraak, 2002)The full potential of interaction in geo visualization lies in linking multiple views of the same data on the screen. Interactive visualization gives the control of the animation to the user, they engage in sorting, highlighting, filtering and transforming, the level of detail displayed and the speed can be determined. So information is less likely to be missed. Also called, guided discovery.  

Two main interactive visualization techniques are introduced by Buja et al. from Nöllenburg (2007).

**Focusing individual views.** The user can modify the single display and what is seen. Choose the perspective, magnification level and level of detail. For example a set of navigation controls can be provided to zoom, pan and rotate. Layers can be selected to display or different attributes can be available to choose from. (Nöllenburg, 2007)

**Linking multiple views.** Linking means simultaneous highlighting of data items in multiple views in possible different formats. This can be combined with brushing; selecting display objects by pointing on them or encircling them on the screen.
This stimulates visual thinking because data can be displayed in different ways and be analysed from different perspectives.
The number, type and arrangements of the different views depend on the task, the user and the available space on the screen or specific interface.
(Nöllenburg, 2007)

### User centred geospatial visualization or Customer engagement

<figure class="text-wrap-right" id="hook">
  <img src="img/hookmodel.jpg" width="200px"/>
  <figcaption> Hook model </figcaption>
</figure>

To engage the target group into an application the hook model will be explained. <a class="xref" href="#hook"> Figure 6. </a> This models explains how a user can become *addicted* to an on-line product. First there is a trigger, to make the user want to use the application. This could be either an external (e-mail, advertisement) or internal trigger. When using the product, the user can makes actions for which they have to be rewarded. If users invest in the system they will likely stay and keep using the system, for they already put time and effort in that particular system.  With multiple rewards and investments the user will go through the process again, for they get internal triggers to perform more actions. 


# The Data

<figure class="text-wrap-right">
  <img src="img/allnames.jpg" >
  <figcaption> All fields with a field-name. </figcaption>
</figure>

From the *Rijksdients voor Cultureel Erfgoed* of the Netherlands a dataset with living field-names in Drenthe was supplied. This data contains field geometries that have a field-name, a name or toponym given to the plot or area by the people living in the neighbourhood from around 1830. These field-names were derived from studies by Naarding and Wieringa, together with het *Drenthse Archief* and *het Meertens-Instituut*. Old toponyms on old maps, tell us a lot, but here they used another source; the memory of the local inhabitants, where generation after generation the field names keep on living. The polygons where drawn by hand or the names were assigned to plots from the cadastre maps from 1830.

The most important factors influencing the forming of field-names are; natural relief, natural water and the vegetation structure. (Spek et al., 2009)

Further reference about the field names in Drenthe can be found in the book *“Van Jeruzalem tot Ezelakker, Levende veldnamenatlas van de Drentse Aa”*. (Spek et al., 2009)

The datasets contain in total 1747 polygons with a field-name. Projection RDNew. EPSG28992

This results in the following coverage of field names:

<p class="table"> Field-name Amounts per source </p>

<table>
  <tr>
      <th> Amount </th> <th> Source </th>
    </tr>
    <tr>
        <td>459 </td> <td> cadastre topographic map from 1832 </td>
    </tr>
    <tr>
        <td>452 </td> <td> Lanjouw </td>
    </tr>
    <tr>
        <td>278 </td> <td> Wieringa</td>
    </tr>
    <tr>
        <td>18 </td> <td> Kadaster </td>
    </tr>
    <tr>
        <td>515 </td> <td> Drents Archief </td>
    </tr>
</table>

Based on this the total research location is determined, consisting of the municipalities Aa en Hunze, Assen, Noordenveld and Tynaarlo. All located in the watershed of the Drentse Aa.

<figure>
  <img src="img/onderzoekgebied.jpg">
  <figcaption>Research area, location in the Netherlands and the municipalities</figcaption>
</figure>

Some of the field names are categorized in a previous study by the RCE. The category explains the origin of the name, specifically; which environmental characteristic was of the most influence on the name creation.

# Method

<figure id="method" class='text-wrap-left' >
  <img src="img/flowchart_Method-01.png" width="400px"/>
  <figcaption>Methodology overview</figcaption>
</figure>

This research will be a design-oriented research. See <a class="xref" href="#method">figure 9</a> for an overview of the working procedure and where the specific objectives are addressed. 
First the design objectives are defined for the prototype application (objective 1). With the data provided by the RCE a small data exploration will be conducted to form an idea and make a design. This will process will be more iterative and chaotic then the overview shows. For design, exploration and requirements emerge in a mixed process. 
The main focus will be building the prototype application. (objective 2). Both the front-end and back-end design will be done by the conducting researcher as part of a learning experience for the internship project.
In the end the prototype will shortly be tested to evaluate the design objectives from sub-objective 1. (objective 3)

The total time span of the project is 4 months, in which the research was set-up, executed and documented. Most creative choices and decisions will be taken by the researcher and her preferences.

## Method Sub-objective 1. Finding the design requirements.

Analysis of users, task and context. 
Identification of requirements
Design and prototype
Test and evaluate

A literature research is done into geo visualization techniques and already available methods. Going from the conventional cartographic techniques to the modern techniques. Including animation and change. Also literature about building geo-web applications and the available techniques will be consulted. To add knowledge and experience from preceding researches to the development of the design requirements.
This can be found in <a class="xref" href="#background-theory"> chapter 2. Background theory </a>

A design oriented research contains several kinds of objectives, of which the following will be set. Based on personal preferences, supervision advice and expert advice from the internship colleagues.
 
 - Define the target group
 - Define the overall design goals
 - Functional requirements
 - User requirements 
 - Contextual requirements
 - Assumptions (user, context, functional)

 (Verschuren and Hartog, 2005)
 

## Method Sub-objective 2. Building the prototype web-application 

<figure id="steps" class="text-wrap-right">
	<img src="img/buildproto-01.png" width= "350px"/>
	<figcaption> Steps building the prototype application </figcaption>
</figure>

In order to build a prototype the design requirements have to be translated to a design. <a class="xref" href="#steps"> Figure 10</a> shows the steps that will be taken in order to develop the application. 

First the data will be explored, to get an idea of the field-names. Also the literature provided with the field-names will be used to learn more about them. 
From this several ideas will be produced and the best will be chosen to continue with.  Decisions and choices will be made on the personal preferences and experiences of the researcher and her supervisors. 

When the idea is settled a front-end and back-end situation for the application have to be developed.  Both will be developed by the researcher.  Decisions and choices will be made on the developed goals and requirements, the background theory, personal preference and experience knowledge of supervisors.
 
The front-end is the presentation layer, so the web-page. A product of HTML, CSS and JavaScript for the web application so that a user can see and interact with it directly. 
The back-end is the data and data access layer of the application. The products will be a database, an API and the pre-processed data. 

Eventually this will all from the prototype-product of this research.

### Data exploration
Before the data could be explored it first had to be pre-processed a bit.  When all data was complete and showed a good coverage of the area and the field-names, a search into possible interesting visualizations was done. 

All the field-name data was delivered in separate .DAT files and scattered over several folders and sources. In order to work with the files in Qgis all the files needed to be converted to shape-files. This was done in R.  In Qgis, manually the attribute names needed were changed in one standardized name in order to merge all the data together. 

<figure>
	<img src="img/fieldnames_preprocessing.jpg"/>
	<figcaption> Flowchart field-name dataset processing </figcaption>
</figure> 

For scripts see the <a class ="xref" href="#A1">appendix 1, 2 and 3. </a>

After merging the datasets it resulted into a lot of overlapping areas, so instead, the field-names were all linked to the Kadaster dataset from 1830. Now a single layer of polygons with multiple names is the result. This was done by spatially joining the datasets, or joining by the Kadaster ID’s which most of the datasets contained. The ID contained; municipality, sheet map number, parcel number. 

Eventually, the field-names that had no category assigned, in the previous research by the RCE, had to be classified as well. This to have more coverage and amount of field-names.

The classification was done in R. See <a class="xref" href="#A3"> appendix 3</a> for the script.  A field-name can consist out of multiple words with a different meaning and multiple categories and lemmings can be assigned to one field-name.  The classification provided by the RCE was used. This contained per category, different codes and alternative words that signifies the same. 

The script runs through all the field-names and all the possible categories, to match which category was applicable. These categories are given in <a class='xref' href="#field-name-cat"> table 4</a> with the amount of classes before and after the classification in R. In the <a class="xref" href="#A4"> appendix 4 </a> a total overview of the categories and the names and alternative names can be found.

<p class="table" id="field-name-cat"> Field-name categories </p>

<table>
    <tr>
        <th colspan="1">Code</th>
        <th colspan="1">Category</th>
        <th >Count old</th>
        <th >Count new</th>
    </tr>
    <tr>
      <td>A</td><td> Altitude </td><td>116</td><td>1109</td>
    </tr>
    <tr>
      <td>B</td><td> Soil type </td><td>79</td><td>551</td>
    </tr>
    <tr>
      <td>C</td><td>Water related names</td><td>33</td><td>199</td>
    </tr>
    <tr>
      <td>D</td><td>River valleys and swamps</td><td>270</td><td>926</td>
    </tr>
    <tr>
      <td>E</td><td>Forest</td><td>175</td><td>3146</td>
    </tr>
    <tr>
      <td>F</td><td>Drift-sand fields</td><td>59</td><td>223</td>
    </tr>
    <tr>
      <td>G</td><td> Wild animals</td><td>38</td><td>181</td>
    </tr>
    <tr>
      <td>O</td><td>Miscellaneous</td><td>0</td><td>85</td>
    </tr>
    <tr>
      <td>W</td><td>Wind direction</td><td>0</td><td>165</td>
    </tr>
    <tr>
      <td colspan="2">Total</td>
      <td>770</td>
            <td>6585</td>
    </tr>
</table>

After this, in Qgis several names and possibilities were explored. Looking into combinations of categories, locations of specific names and this in relation to the height, water bodies, locations of build-up areas and land-use type. 

### The Idea
From one of the possible findings of the data exploration the main idea will follow. This is made on personal preference, no test were done for this. 

### Front-end
For the front-end development the following programming languages and packages were used:

- JavaScript
- HTML
- CSS

JavaScript packages needed for building the geo-application will be Leaflet. Leaflet is a JavaScript library for the creation of interactive maps by the founders of OpenStreetMap. D3.js will be used for the interactivity; this is a graphic drawing package.

Leaflet currently compete with OpenLayers only with respect to the display of map tiles, because OpenLayers offers much more functionality when it comes to interactive and vector-based map- ping tools. Also MapFish provides much more capabilities. For this was not needed for this application, the choice was made for using Leaflet, being light and simple.

Leaflet also has the applicability to install plug-ins. The MiniMap plug-in lets the user change the background map, and Leaflet Draw enables the creation of lines, polygons and points by the user.

See <a class="xref" href="#A5"> appendix 5</a> for the Leaflet map initializing code.

### Back-end
First both client side and server side are built on one computer as a single seat set-up, in order to develop and test the processes. Once the desired result is achieved, the prototype application will be moved to a server with a database. 

#### Database
The open source database PostgreSQL was installed with a PostGIS extension to create the needed database. It is currently the most popular free and open source spatial database (Steiniger and Hunter 2013). The PostGIS extension enables geographic objects like shape files and rasters. 

First, the data needed for the application was downloaded and pre-processed. <a class="xref" href="#A6"> appendix 6 and 7 </a> shows the pre-processing for the AHN2 data and the water topologies. 
The AHN2 tiles covering the research area were downloaded from nationaalgeoregister.nl to show the relation of the field-names with the environment. The water bodies are downloaded from the open data PDOK.nl. The Top10NLactueel contains all topology of the Netherlands on a scale of 1:25.000. Only the water bodies were used. 

After pre-processing all the data was loaded in the database with a Dutch projected coordinate system RD new (EPSG:28992) See <a class="xref" href="#A8"> appendix 8 </a> for the Shp2psql and Raster2psql lines used. 

#### API
An API or application programming interface is needed to connect the web-application with the data in the PostGis database.  For this purpose Brianc Node-Postgres is used. Node-Postgres is a PostgreSQL client for node.JS with pure JavaScript bindings. 

For more info see:

- https://github.com/brianc/node-postgres
- https://nodejs.org/about/

See <a class="xref" href="#A9"> appendix 9 </a> for the API request and response lines. 
The request makes use client response on Leaflet Draw.  The response is send back to JS and handled with D3.  Because Leaflet projects in WGS84 (EPSG:4326) the SQL query translates the coordinates to RDnew for intersection with the data in the database. In the end of the SQL query, it transforms it back to WGS84 in order to project the line correctly on the leaflet map again. 

## Method Sub-objective 3. Evaluating the web-application

A small test will be held to see if the product complies with the set goals and objectives.
During the whole process, iteratively the web visualization was adjusted and tested again until the project ends.

The final test will be conducted with a small questionnaire.
About 20 people will be asked to open the web-application and look at it, use it and play around with it. Afterwards, 8 statements will be given and asked to rate them to the level of agreeing or not. Ranks between a number of 1 and 5, from totally disagreeing till, total agreeing. 
Because the objectives were used in defining the statements, it tests if the application lives up to the objectives set for the user. 

Because there is not an official testing group available, the participants will be colleagues of the Waag Society, the heritage institutions of the Heritage and Location project and possible, classmates and/or family and friends. This to have a broad general public.  

<a class="xref" href="#QandO">Table 5 </a> 
shows the statements asked and the connection with the design requirements which are in <a class="xref" href="#results-sub-objective-1-the-design-requirements"> chapter 5.1 </a> 
The complete questionnaire can be found in <a class="xref" href="#A10"> appendix 10</a>. 

<p class="table" id="QandO"> Questions and Objectives </p>

<table>
<tr>
  <th colspan="1"> Number </th>
  <th colspan="1"> Objective </th>
  <th colspan="1"> Statement </th>
</tr>
<tr> 
  <td>1</td>
  <td> U1 </td>
  <td> I think the application is visually appealing. </td>
</tr>
<tr> 
  <td>2</td>
  <td> U2, U3</td>
  <td> I feel tempted to use the tools and functions in the application multiple times. </td>
</tr>
<tr>
  <td>3</td>
  <td>U3</td>
  <td>I feel tempted to use this application multiple times (in the future) </td>
</tr>
<tr> 
  <td>4</td>
  <td> U4 </td>
  <td>The meaning and origin of the field-names became clear to me. </td>
</tr>
<tr> 
   <td>5</td>
   <td> U5 </td>
   <td>The shown information is surprising and interesting. </td>
</tr>
<tr> 
  <td>6</td>
  <td>U6</td>
  <td>By using this application I understand more about the importance of safe-guarding the field-names as cultural heritage. </td>
</tr>
<tr> 
  <td>7</td>
  <td>F1</td>
  <td>The application is simple to use. </td>
</tr>
<tr> 
  <td>8</td>
  <td>F2</td>
  <td>Everything was working as I expected. </td>
</tr>
</table>

#Results

## Results Sub-objective 1. The design requirements

The main goal of this research is to build an attractive web-application for the project Heritage & Location to show its potential of visualizing heritage data and preserving them. A big part of the web application will be a geo-visualization of the intangible cultural heritage data set of living field names from Drenthe. The interactivity of the web application, will give users the possibility to discover the names in relation to the environment. The focus is on revealing hidden meaning of the raw data, for the general public.

Showing the field-names in an interactive application is explanatory visual communication. The goal of the field-names is explanatory, while the interactivity makes the data exploratory. 

### Target group

The target group will be defined as the common citizen, living in Drenthe and show an interest in their direct environment and want to discover something about its history. It will not specifically be targeted at children or elderly but to a general public. The target group's language is Dutch.

### Design goals

-G1 The goal is to preserve the living heritage names of Drenthe, which are mostly stored in people’s memory and so will disappear.
-G2 Give the target group the possibility to explore them discovers them. For names cannot be found in the real surroundings, only in peoples memory and now given a place to *exist*.
-G3 Getting the stories out of the raw data and show the target group the surprising knowledge that stays hidden. Help, the target group explore intangible cultural heritage and so the history of the Dutch landscape. Engage the target group in something interesting about their own landscape.

### User requirements

The target group must feel:

- U1 Attracted to use the application
- U2 Attracted to stay and play around with the application
- U3 Challenged to explore more
- U4 Discover the meaning of the field-names in relation to their environment
- U5 Discover interesting stories and surprising facts about the field-names
- U6 Understand the field-names and their value

### Functional requirements

- F1 The application must be intuitive and simple to use, so it shows quick and surprising results on the actions of the target group.
- F2 The application must be technically working in an efficient and error-safe way.

### Context requirements

- Only free and open source software is used. 

### Assumptions

- The target group shows interest in the history of their living environment.
- The data from the RCE is a reliable source. 


## Results Sub-objective 2. Building the prototype web-application

### Data exploration

<figure id="example"   >
  <img src="img/hoogte_voorbeeld.jpg">
  <figcaption> Field-names example of names with height indication on the height map </figcaption>
</figure>

In order to visualize the relation between the field-names and the geographical surroundings, several ideas came up to do this. As many characteristics are of influence, many possibilities could be chosen. The following ideas were shortly explored:

- Showing soil related field names on a soil map. A current or historic soil map.
- Showing height related field names on a height map. 
- Showing ground water levels in relation to field names about water, swamps and soil types. 
- Vegetation types, present on a field in the current situation vs what the field-name tells us about the historic vegetation.
- Showing names with relation to wind direction, in their position relative to the closest town or city.

<a class="xref" href="#example">Figure 12 </a> shows some fields with names related to height. 
Some fields do indicate small increases or decreases in the in relation to the area around. The *Bult* and the *Hooge Akker* are clearly on higher ground then the fields to the West. Where de *zwarte kuil* indicates that it is a lower field.

### The idea
For the names are human invented they only reach as far as the naked eye could see.  The relation of a field with a name can only be shown in relation to the direct environment. For example, a name like *Bultakker* (bump field) tells us that this field lies higher than its surrounding fields, not what the exact altitude it is.
Therefore the main idea will be;

> Showing the field names in relation to the height. By doing this, it includes names related to altitude, but also water and swamps, for lower areas are more wet then higher areas. Also vegetation type related names, will show correlation for this often depends on wet or dry situations and soil properties created by altitude differences. 

In order to include this in the visualization, showing the polygons on a map won't be sufficient. Chosen is to draw a transect of the height data and indicate the names of the fields on this. 
The field-name data sets are static data, but will be displayed dynamically and interactive. It will let the user explore, and re-discover the information themselves, called *guided discovery*. (Nöllenburg, 2007)

The information will first be shown on a simple map and then in detail on a transect map. So the same information is shown in multiple views and from different perspectives. (*linking*) See <a class="xref" href="#"> section 2.3.4 </a>.

The static display of the field-names will be on the map as simple polygons, to indicate their position and show the user the spatial dimension, the location and sizes of the fields.
There will be a set of navigation controls for the map available to the user. Also multiple background layers form which the user can choose for extra information. The different base maps show the difference between 1830 and now. 

The field names are historic but do not contain a change in time. Therefore the time bar had no relevance in the application.

Interactivity will be added to the transect line, letting the user define the transect line themselves and explore the different objects located on and around the transect line. The transect line, shows the relation between height, vegetation types on certain heights and the distance to rivers in accordance to the field-names.

Mouse-over actions will show information and stories about the origin of the names adding to the knowledge of the field-names and the environment. The brushing technique <a class="xref" href="#"> (section 2.3.4)</a> will be used to highlight the height on the line and the position on the map of that specific point so the user can link between the two presentations. 

#### Mood board
For the layout, ideas and colour use a mood board was made. Including inspiration pictures from the Internet. Search terms used are: **living heritage, cultural heritage, transect and old transect map**
One of the main inspirations was the following image:

<figure>
  <img src="img/transect_inspiration-01.jpg">
  <figcaption> Inspiration Picture </figcaption>
  <p>*Source: https://commons.wikimedia.org/wiki/File:1832_Erie_Canal.jpg *</p>
</figure>

Complete mood board; see <a class="xref" href="#A11">appendix 11. </a>

Custom fonts were explored to add to the feeling of an old map to the design. Old font was tried but made the names hard to read. So changed back to an easier to read font. Website used is www.fontsquirrel.com


### Front-end
 
The result is a web-page with a geo-visualization. Including: 

1. A map showing the area, where a line can be drawn to locate the position of the transect line. With navigational and drawing functionalities for the map.
2. A graphic transect line that can be explored. Including information about the field-names. 
3. A panel showing the information about the field names.
4. An opening page with explanation about how the application works.

The web application can be found on: <a href="http://maptime.waag.org/veldnamen/"> maptime.waag.org/veldnamen </a>.

Some screen-shots of how it looks. The first <a class="xref" href="#welcomescreen" > figure 14</a> is the welcome screen. Where information about the field-names is given and the explanation of the how the application works. If the user is ready they can press the button, to go to the map and start the application. 

<figure id="welcomescreen" >
  <img src="img/welcomescreen.png">
  <figcaption>Welcome screen </figcaption>
</figure>

The next <a class="xref" href="#openingscreen" > figure 15</a> shows how the screen looks when entering the application. An example line is already given to show the user what is possible. 

<figure id="openingscreen" >
  <img src="img/mapopeningscreen.png">
  <figcaption>Map status in beginning </figcaption>
</figure>

The <a class="xref" href="#panel" > figure 16 </a> shows the drop-down panel with multiple background layers. If the user mover the mouse over the drop-down menu this will appear. Then they can click on the preferred layer. 
The image after that shows the information panel that will appear when the mouse moves over one of the fields. The name and category of the field is given, with some supplementing information if available. 

<figure id="panel" >
  <img src="img/mapspanel.png">
  <img src="img/mapinfo.png">
  <figcaption>Map functionalities with mouse over. </figcaption>
</figure>

The user can click on the line button to start drawing a line. 

<figure>
  <img src="img/drawline.png">
  <figcaption>Map drawing a line function </figcaption>
</figure>

<figure>
  <img src="img/munnikhemham.png">
  <figcaption>Example interesting spot </figcaption>
</figure>


### Back-end 

See <a class="xref" href="#method2"> figure 19 </a> for the overall set-up of the back-end system. 

<figure id="method2” >
  <img src="img/webpage_model.jpg" />
  <figcaption>Prototype application overview</figcaption>
</figure>

On the web page a line can be drawn by Leaflet Draw on the Leaflet map. The coordinates of this line are edited to a line string format and parsed into a SQL query. This query is explained in <a class="xref" href="#A9"> appendix 9 </a> code snippet 2 and 3. This query is asked to the API which requests the data from the PostGIS database. The response is a geoJSON array containing the heights on every 10 meters of the line (code snippet 11). This data is parsed back to the script of the website and used to draw the transect line and all the other characteristics needed. 

In <a class="xref" href="#A9"> appendix 9 </a> the code of the communication between the front-end and back-end is given.  As well as an example of the leaflet map and the d3 compilation of the request. 

The total code can be found on <a href=" https://github.com/NieneB/veldnamen/"> https://github.com/NieneB/veldnamen</a>.

The database contains the following data:

- Field-names polygons with the names and categories
- Raster with AHN height data 
- Water bodies with their names, polygons

## Results Sub-objective 3. Evaluating the web-application

14 people were asked to use the application and fill in the small questionnaire. The graph below shows the average outcome per question. With 2 and 5 being the most positive and 8 being the most negative.
Overall the scores are quite high.

Question 2 was if people were triggered to perform multiple actions was answered the most positive. Also question 5; if the user found the information surprising and interesting, scored high.  Meaning that the application was perceived interesting and the user lingered around to discover more.

Question 8; everything was working as expected, got the lowest score; the functionality did not work as the user would expect.

On average the user requirements scored a 3.66. The functional requirements scored a 3.32.

<figure>
  <img src="img/uitslag_quest.png">
  <figcaption> Results questionnaire </figcaption>
</figure>

For the total answer overview see <a class="xref" href="#A13"> appendix 13</a> and the extra remarks made in <a class="xref" href="#A14">appendix 14. </a>

# Discussion
The short time span (4 months) to conduct the research, resulted in a product that is not finished completely. Only a rough prototype was produced. Because the conducting researcher did all steps of the process herself, this resulted in time shortage and a lack of specific technical skills and knowledge. The iterative process of a good design oriented research, had to be followed several times in order to come to a user centred design with a technical working application. Recommended would be to outsource certain parts of the development of an application to professionals with specific aimed skills. 
Overall, the first results were promising and the main idea came forth from the results.

Per sub-objective the discussion will be given.

## Discussion Sub-objective 1. The design requirements
Not much time was invested in specifying the design objectives and requirements. 
No research was conducted into the target group.


## Discussion on the data
The data was provided by the RCE, because this all came in an unknown file structure with no meta-data behind the various datasets, the background and quality of the data taken into consideration for this research. Also the categorization of the names, without a category assigned yet, was done in a harsh and crude way. A simple sting comparison was done, which also resulted in wrong assigning of categories. For example short words like *val* and *gat* could also appear in names which didn't refer to this particular relief structure. Also the order of the script which starts at the beginning of the table and runs on the order of categories through the possible categories, resulting in more use of names in the category of altitude and forests, then the last category wind direction and miscellaneous. The order of the table and so the order of running the script can be seen in<a class="xref" href="#A4"> appendix 4 </a>. Overall no human cognition came to pass for the process, which makes the classification crude. But the focus was more on the technical development of the application then the correctness of the background information. 

The professional knowledge about the data was with the RCE; therefore the focus was more on the visualization and not improving the information in the data. A lack of professional knowledge about the field-names was kept at a low level. 


<!-- Also the AHN processing was quite crude. The no value pixels where crudely run through a default tool of Qgis to fill up. Other possibilities were using another version of the AHN or calculating the water bodies differently. On the other hand for the goal of the data this was still too detailed. Using pixels of 0.5 meter resolution is not really needed for the visualization. The current dataset did provide a good idea for hight indication. 
 -->
On the other hand the correspondence between the AHN and the field-names can be discussed for the height is the recent height, while the fields originate from 1800. The question lingers if the altitude difference is still the same as in 1830? A lot could have changed since. The same is valid for the water topologies and the different background maps used. Which all originate from 2015. Therefore they do not show the correct correlation with the field names. Some lakes disappeared and new ones appeared. The same as train and road tracks. 
The default background map is a map from 1830, showing a good reference for the field-names. But on the transect line, water bodies show up that cannot be seen on this base layer. When switching to the base layer from the current map, the water bodies do correlate but the field-names are not referenced. 

## Discussion Sub-objective 2. Building the prototype web-application
Data exploration gave multiple ideas; no testing was done which idea would prove the best results. Solely made on personal preferences. 

###Front-end

The theoretical framework did bring in some nice techniques that are found back in the application. Like the brushing and linking techniques. However when it comes to colour, patterns, symbol or size selection it was more done in a subjective manner then looking at the theory. It is hard to follow a strict theoretical framework and every visualization and story to be told is an individual case. and so, needs to be designed and created individual. 

Geo-visualization is so broad and there are so many ways in which a dataset can be described that it is not possible to set up a framework in steps to follow. For the field-names there are probably a variety of forms to present them. From simply displaying the names on a map, to animated dynamic maps. 

###Back-end
The technology to build the web application was a restricting factor in the implementation of some ideas. For example, displaying the total length of the line was a hard technical trick and therefore not finished or worked out. Also the panel with the extra base-layers was supposed to show all the time. But the plug-in for the miniMap did not support this and there was no time to work around it. 
On the positive site, the D3 package provided good and simple ways to work with the graphical display of the transect line. It is an easy tool and draws simple SVG formats in the browser with the possibility to animate it easily. 
Also leaflet proved to be quick and simple, providing the basic needs for a map and displaying the geoJSON of the field-names on it. The drawing plug-in was also easily edited so only the possibility for drawing a line was enabled. Though, changing the text from English to Dutch was harder and therefore also not implemented in the short time span. 
Still some minor defaults can be noticed but the overall picture shows a good first idea of the application. 

The database and API slow down the process of plotting the transect line. The AHN data is too detailed for every 10 meters a point is asked to intersect. This makes the process really slow, especially when long lines are requested.

## Discussion Sub-objective 3. Evaluating the web-application
Though, after the first concept of the application, the time was not found to conduct a good testing round and adjust the application to this. The advice and comments received in the end, where very useful and showed clearly where the user got stuck. Though, there was no time to implement this anymore.

The test with the questionnaire was conducted very quickly and not thoroughly. The statements posed may be too positively asked. 5 levels might be giving the people an opportunity of choosing 3 which is too neutral. The participants were biased and influenced by that they like heritage and understand the project in the bigger picture. More participants were needed and in the target group description. 

Overall the application was perceived attractive and beautiful. As the scores of the questionnaire are on the positive side. The functionality scored the lowest as the user requirements scored slightly higher. 

# Conclusion
Although the overall time span of the project was too short, a first prototype application was developed. This already shows the potential of explaining the field-names in correlation to its direct environment.
There are many more possibilities of visualization to tell the same story. But one type of story had to be selected to tell and develop. If this was the best way to tell the story of the field-names can only be tested if multiple visualizations are developed and compared. Every geo-visualization needs to be looked at individually and developed specifically for the story it needs to tell.
There are many recommendations to be done on the technical and design part of the prototype. The next section shows some ideas and comments that can easily be implemented when more time was available. 

## Recommendations on the application

There are sufficient recommendations to be done to improve the web application. Some are extra ideas, that didn't receive the time to be implemented yet and others are recommendations done by the test group. 

One idea was split the overall layout of the web-page, up in 3 screen parts. First a screen with information, then scroll through to the next screen, where the user can draw a line. If the line is loaded, a new screen is show with the transect line and the information behind it. If the user wants to go back to either the explanation, or drawing a new line, they can simply scroll up and start over again. This form of websites is called a carousel and starts to become more popular. 

An essential thing to be added is a *waiting sign*. Because the application is rather slow, and the user doesn't see a *waiting sign* yet. The user experiences this now as nothing is happening after their actions. The user they need to know that something **is** happening and will soon get a reward.

Overall, the information in form of text was not complete. More specific stories behind the field-names are needed to make it more interesting. Also, images, indicating vegetation types, soil types or any other object related to the field-names, are missing. It will make the transect-line more interesting and appealing.

Some other small recommendations are:

- The map and transect line need scale indication.
- Make the application suitable for multiple browsers.
* Make the extra map layers always visible in front.
* Find water body data from 1830 instead of 2015. 
* For user investment, let the user draw a field and add a field-names they know, themselves.
- Make the water bodies more ecstatically correct, by lowering them beneath the ground-level and fill with blue. 


<h1 class ="nocount">References</h1> 

<div id="bib">
 <p> <b>Actueel Hoogtebestand Nederland.</b>  (n.d.). AHN - Actueel Hoogtebestand Nederland - homepage [overzichtspagina]. Retrieved July 13, 2015, from http://www.ahn.nl/index.html</p>
 
  <p><b>Bertin, J. </b> (2000). Matrix theory of graphics. Information Design Journal, 10(1), 5–19.</p>
  
 <p><b>Blok, C. </b> (2000). Monitoring Change: Characteristics of Dynamic Geo-spatial Phenomena for Visual Exploration.  Spatial Cognition II, 1 (2000), 16–30. http://doi.org/10.1007/3-540-45460-8_2</p>
 
 <p> <b>Cartwright, W., Miller, S., & Pettit, C. </b> (2004). Geographical visualization: Past, present and future development. Journal of Spatial Science, 49(1), 25–36. http://doi.org/10.1080/14498596.2004.9635003</p>
 
  <p><b>Cerasuolo, F., Cutugno, F., & Leano, V. A. </b> (2012). Visualization with a New Visual Metaphor for Hierarchical and Stratified Temporal Domain. In S. D. Martino, A. Peron, & T. Tezuka (Eds.), Web and Wireless Geographical Information Systems (pp. 57–71). Springer Berlin Heidelberg. Retrieved from http://link.springer.com.ezproxy.library.wur.nl/chapter/10.1007/978-3-642-29247-7_6</p>
  
 <p> <b>Deal, L. </b> (2014). Visualizing Digital Collections. Technical Services Quarterly, (April), 30–30. http://doi.org/10.1080/07317131.2015.972871</p>
 
 <p> <b>DEN. Home.</b>  (n.d.). Retrieved May 6, 2015, from http://www.den.nl/</p>
 
 <p> <b>Dibiase, D., Maceachren, A., Krygier, J., & Reeves, C. </b> (1992). Animation and the Role of Map Design in Scientific Visualization. Cartography and Geographic Information Systems, 19(4), 201–&. http://doi.org/10.1559/152304092783721295</p>
 
 <p> <b>Droj, G. </b> (2010). Cultural Heritage Conservation by GIS, 1–6. </p> 
 
 <p> <b>Elwood, S. </b> (2011). Geographic Information Science: Visualization, visual methods, and the geoweb. Progress in Human Geography, 35(3), 401–408. http://doi.org/10.1177/0309132510374250</p>
 
<p> <b>Erfgeo. </b> (n.d.). Retrieved July 22, 2015, from http://erfgeo.nl/</p>

  <p><b>Erfgoed & Locatie</b> (n.d.). Retrieved July 22, 2015, from http://erfgoedenlocatie.nl/</p>
  
<p>  <b>Hahmann, S., & Burghardt, D.</b>  (2013). How much information is geospatially referenced? Networks and cognition. International Journal of Geographical Information Science, 27(6), 1171–1189. http://doi.org/10.1080/13658816.2012.743664</p>

 <p> <b>Karavia, D., & Georgopoulos, A. </b> (2013). Placing Intangible Cultural Heritage. Researchgate.Net, 675–678. http://doi.org/10.1109/DigitalHeritage.2013.6743815</p>
 
<p> <b>Köbben, B., & Yaman, M. </b> (1996). Evaluating Dynamic Visual Variables. In Proceedings of the Seminar on Teaching Animated Cartography. Madrid, Spain: International Cartographic Association. Retrieved from http://cartography.geo.uu.nl/ica/Madrid/ormeling.html</p>

<p> <b>Kraak, M.-J., & Klomp, A. </b> (1996). A Classification of Cartographic Animations: Towards a Tool for the Design of Dynamic Maps in a GIS Environment. In Proceedings of the Seminar on Teaching Animated Cartography. Madrid, Spain: International Cartographic Association. Retrieved from http://cartography.geo.uu.nl/ica/Madrid/ormeling.html</p>

 <p> <b>Lai, J., Luo, J., & Zhang, M. </b> (2012). Design and Realization of the Intangible Cultural Heritage Information Management System Based on Web Map Service. Springer-Verlag Berlin Heidelberg 2012, 605–612.</p>
  <p><b>Lin, H., Gong, J., & Wang, F. </b> (1999). Web-based three-dimensional geo-referenced visualization. Computers and Geosciences, 25(10), 1177–1185. http://doi.org/10.1016/S0098-3004(99)00076-X</p>
 <p> <b>MacEachren, A. M., & Kraak, M.-J. </b> (2001). Research Challenges in Geovisualization. Cartography and Geographic Information Science, 28(1), 3–12. http://doi.org/10.1559/152304001782173970</p>
 <p> <b>Martin, S., Reynard, E., Pellitero Ondicol, R., & Ghiraldi, L. </b> (2014). Multi-scale Web Mapping for Geoheritage Visualisation and Promotion. Geoheritage, 6(2), 141–148. http://doi.org/10.1007/s12371-014-0102-3</p>
 <p> <b>Mennis, J. L., Peuquet, D. J., & Qian, L.</b>  (2000). A conceptual framework for incorporating cognitive principles into geographical database representation. International Journal of Geographical Information Science, 14(6), 501–520. http://doi.org/10.1080/136588100415710</p>
 <p> <b>Meyer, É., Grussenmeyer, P., Perrin, J. P., Durand, A., & Drap, P. </b> (2007). A web information system for the management and the dissemination of Cultural Heritage data. Journal of Cultural Heritage, 8(4), 396–411. http://doi.org/10.1016/j.culher.2007.07.003</p>
 <p> <b>Nöllenburg, M. </b> (2007). Geographic Visualization. In A. Kerren, A. Ebert, & J. Meyer (Eds.), Human-Centered Visualization Environments (pp. 257–294). Springer Berlin Heidelberg. Retrieved from http://link.springer.com/chapter/10.1007/978-3-540-71949-6_6</p> 
 <p> <b>Ogao, P. J., & Kraak, M.-J.</b>  (2002). Defining visualization operations for temporal cartographic animation design. International Journal of Applied Earth Observation and Geoinformation, 4(1), 23–31. http://doi.org/10.1016/S0303-2434(02)00005-3</p>
 <p> <b>Ormeling, F. </b> (1996). Teaching Animated Cartography. In Proceedings of the Seminar on Teaching Animated Cartography. Madrid, Spain: International Cartographic Association. Retrieved from http://cartography.geo.uu.nl/ica/Madrid/ormeling.html</p>
 <p> <b>Petrescu, F. </b> (2007). the Use of Gis Technology in Cultural Heritage. October, (October), 1–6.</p>
 <p> <b>Shedroff, N. </b> (1999). Information interaction design: A unified field theory of design. Information Design, 267–292.</p>
<p>  <b>Spek, T., Elerie, H., & Kosian, M. </b> (2009). Van Jeruzalem tot Ezelakker, Levende veldnamenatlas van de Drentse Aa. Matrijs.</p>
<p>  <b>Steiniger, S., & Hunter, A. J. S. </b> (2013). The 2012 free and open source GIS software map – A guide to facilitate research, development, and adoption. Computers, Environment and Urban Systems, 39, 136–150. http://doi.org/10.1016/j.compenvurbsys.2012.10.003</p>
<p>  <b>Tensen, T. </b> (2014). Master Thesis Geo-data animations in television journalism :, 1–87.</p>
 <p> <b>TOP10NL Publieke Dienstverlening Op de Kaart Loket. </b> (n.d.). Retrieved July 13, 2015, from https://www.pdok.nl/nl/producten/pdok-downloads/basis-registratie-topografie/topnl/topnl-actueel/top10nl</p>
 <p> <b>UNESCO </b> (2003) Culture Sector - Intangible Heritage -  CONVENTION FOR THE SAFEGUARDING
OF THE INTANGIBLE CULTURAL HERITAGE. Paris, 17 October 20013, Retrieved May 6, 2015, from http://www.unesco.org/culture/ich/index.php?lg=en&pg=00002</p>
<p>  <b>Veldnamen - Encyclopedie Drenthe Online.</b>  (n.d.). Retrieved July 22, 2015, from http://www.encyclopediedrenthe.nl/Veldnamen</p>
<p> <b>  Verschuren, P., Hartog, R. </b> (2005) Evaluation in Design-Oriented Research, Department of Methodology, Nijmegen School of Management, Radboud University, Nijmegen </p>
 <p> <b>volkscultuur. </b> (n.d.). Retrieved May 6, 2015, from http://www.volkscultuur.nl/</p>
  <p><b>Waag Society. </b> (n.d.). Retrieved July 23, 2015, from https://www.waag.org/nl/organisatie</p>
 <p> <b>Zeijden, A. V. D. </b> (2011). Immaterieel erfgoed en musea, (35), 4–6.
</p>
</div>

<h1 class="nocount" >Appendix</h1>

<h2 class ="nocount" id="A1">Annex 1. R script converting files to shape-file. </h2>

    filenames <- list.files()
    filenames <- list.files(filenames , pattern = "*.TAB" ,full.names = T)

    x = list of folder files # cat = category folder
    exportToShape <- function(x, cat){
      for(i in 1:length(x)){
          name <- x[i]
          nr <- strsplit(name, "/")
          layer <- substr(nr[[1]][2], 1, nchar(nr[[1]][2])-4 )
          lemming <- substr(nr[[1]][2], 4, nchar(nr[[1]][2])-4)
          file <- readOGR(name, layer)
          file$category <- cat
          file$lemming <- lemming
          writeOGR(obj = file, dsn = "shape_vlak", layer = layer, driver = "ESRI Shapefile", overwrite_layer = T)
      }
    }
    exportToShape(filenames, "overig")

<h2 class ="nocount" id="A2">Annex 2. SQL adjustments field-names</h2>

    -- UPDATE veldnamen3 SET naam = naam_2 WHERE naam IS NULL;
    -- UPDATE veldnamen3 SET atoto_co_3 = code_3 WHERE atoto_co_3 IS NULL;
    -- UPDATE veldnamen3 SET atoto_co_2 = code_2 WHERE atoto_co_2 IS NULL;
    -- DELETE FROM veldnamen3 WHERE naam IS NULL;
    -- ALTER TABLE veldnamen3 DROP COLUMN naam_2 CASCADE;
    -- ALTER TABLE veldnamen3 DROP COLUMN code_1_ CASCADE;
    -- ALTER TABLE veldnamen3 DROP COLUMN code_2 CASCADE;
    -- ALTER TABLE veldnamen3 DROP COLUMN code_3 CASCADE;
    -- ALTER TABLE veldnamen3 DROP COLUMN code_4 CASCADE;
    -- ALTER TABLE veldnamen3 RENAME COLUMN atoto_co_1 TO code_1;
    -- ALTER TABLE veldnamen3 RENAME COLUMN atoto_co_2 TO code_2;
    -- ALTER TABLE veldnamen3 RENAME COLUMN atoto_co_3 TO code_3;

  
<h2 class ="nocount" id="A3">Annex 3. R script detecting categories </h2>

    library(sp)
    library(raster)
    library(rgdal)
    library(rgeos)
    require(RPostgreSQL)
    require(rgdal)
    
    swd("/Users/waag/Documents/MGI_Stage/9_veldnamen/10_VeldnamenOrgineel/")
    
    # csv alle categorien en Lemmings
    categorie <- read.csv(file = "Categorie_Alles.csv", header = T , sep=","   )
    
    # shape-file alle velden + namen
    velden <- readOGR(dsn = "/Users/waag/Documents/veldnamen.shp", layer = "veldnamen", stringsAsFactors = F)
    
    # write shape-file back
    writeOGR(obj = velden, dsn = "veldnamen_cat.shp", layer = "veldnamen_cat", driver = "ESRI Shapefile")
    
    # modifying shape-file
    velden$CODE_1[velden$CODE_1 != NULL] <- velden$ATOTO_CODE
    ## correctie
    velden$CODE_1[velden$CODE_1 == "D02"] <- "D2"
    velden$CODE_1[velden$CODE_1 == "E04"] <- "E4"
    velden$CODE_1[velden$CODE_1 == "G03"] <- "G3"
    velden$CODE_1[velden$CODE_1 == "B03"] <- "B3"
    velden$CODE_1[velden$CODE_1 == "G06"] <- "G6"
    velden$CODE_1[velden$CODE_1 == "G07"] <- "G7"
    velden$CODE_1[velden$CODE_1 == "A01"] <- "A1"
    velden$CODE_1[velden$CODE_1 == "D03"] <- "D3"
    velden$CODE_1[velden$CODE_1 == "D06"] <- "D6"
    velden$CODE_1[velden$CODE_1 == "O08"] <- "O8"
    velden$CODE_1[velden$CODE_1 == "O02"] <- "O2"
    
    ## categorien toevoegen
    i <- 0
    j <- 0
    
    for( i in 1:length(velden$NAAM)){
      naam <- velden$NAAM[i]
      for( j in 1:length(categorie$Lemming)){Answers on the questionnaire
        CODE <- categorie$Lemming_Code[j]
        tekst <-  paste(categorie$Lemming[j],"|",categorie$amaltertieven[j] , sep = "")
        geld <- grepl(tekst, naam, ignore.case=T)
        if(geld){
          if(is.na(velden$CODE_1[i])){
            velden$CODE_1[i] <- paste(CODE)}
          else if(is.na(velden$CODE_2[i])){
            velden$CODE_2[i] <- paste(CODE)}
        }
        print(paste(naam, tekst, CODE, geld))
      }
    }
    

<h2 class ="nocount" id="A4">Annex 4. Categories field-names form RCE </h2>

<table>
<tr> <th>	Lemming Code	</th> <th>	Category 	</th> <th>	Category Code	</th> <th>	Lemming	</th> <th>	Name Alternatives	</th> <th>	Count first Code	</th> <th>	Count second Code	</th> </tr>
<tr> <td>	A1	</td> <td>	Relief	</td> <td>	A	</td> <td>	berg	</td> <td>	bergen|bergje|barg	</td> <td>	210	</td> <td>	38	</td> </tr>
<tr> <td>	A10	</td> <td>	Relief	</td> <td>	A	</td> <td>	leest	</td> <td>		</td> <td>	13	</td> <td>	247	</td> </tr>
<tr> <td>	A11	</td> <td>	Relief	</td> <td>	A	</td> <td>	richel	</td> <td>		</td> <td>	1	</td> <td>	14	</td> </tr>
<tr> <td>	A12	</td> <td>	Relief	</td> <td>	A	</td> <td>	duin	</td> <td>	dun|dunne	</td> <td>	39	</td> <td>	22	</td> </tr>
<tr> <td>	A13	</td> <td>	Relief	</td> <td>	A	</td> <td>	dal	</td> <td>	daal|del|dil	</td> <td>	39	</td> <td>	175	</td> </tr>
<tr> <td>	A14	</td> <td>	Relief	</td> <td>	A	</td> <td>	kuil	</td> <td>	koel	</td> <td>	18	</td> <td>	4	</td> </tr>
<tr> <td>	A15	</td> <td>	Relief	</td> <td>	A	</td> <td>	waard	</td> <td>	weerd	</td> <td>	2	</td> <td>	8	</td> </tr>
<tr> <td>	A16	</td> <td>	Relief	</td> <td>	A	</td> <td>	kwab	</td> <td>	kweb|kwebbe|kwabbe	</td> <td>	4	</td> <td>	10	</td> </tr>
<tr> <td>	A17	</td> <td>	Relief	</td> <td>	A	</td> <td>	gat	</td> <td>		</td> <td>	11	</td> <td>	8	</td> </tr>
<tr> <td>	A18	</td> <td>	Relief	</td> <td>	A	</td> <td>	put	</td> <td>		</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	A19	</td> <td>	Relief	</td> <td>	A	</td> <td>	laag	</td> <td>	laagen|laagte|leeg|lege	</td> <td>	1	</td> <td>	44	</td> </tr>
<tr> <td>	A2	</td> <td>	Relief	</td> <td>	A	</td> <td>	bult	</td> <td>	bulten|bulte|bultje|bultien	</td> <td>	48	</td> <td>	15	</td> </tr>
<tr> <td>	A20	</td> <td>	Relief	</td> <td>	A	</td> <td>	val	</td> <td>		</td> <td>	499	</td> <td>	53	</td> </tr>
<tr> <td>	A21	</td> <td>	Relief	</td> <td>	A	</td> <td>	plat	</td> <td>		</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	A22	</td> <td>	Relief	</td> <td>	A	</td> <td>	vlak	</td> <td>	vlakte|vlakkien	</td> <td>		</td> <td>	2	</td> </tr>
<tr> <td>	A23	</td> <td>	Relief	</td> <td>	A	</td> <td>	hol	</td> <td>		</td> <td>	15	</td> <td>	120	</td> </tr>
<tr> <td>	A24	</td> <td>	Relief	</td> <td>	A	</td> <td>	glij	</td> <td>	glijt|gleet|gleed	</td> <td>	2	</td> <td>	16	</td> </tr>
<tr> <td>	A3	</td> <td>	Relief	</td> <td>	A	</td> <td>	hoog	</td> <td>	hoge|hoogte|heugt	</td> <td>	71	</td> <td>	41	</td> </tr>
<tr> <td>	A4	</td> <td>	Relief	</td> <td>	A	</td> <td>	hoorn	</td> <td>	Horne|hörne|heurn	</td> <td>	64	</td> <td>	17	</td> </tr>
<tr> <td>	A5	</td> <td>	Relief	</td> <td>	A	</td> <td>	hel	</td> <td>	helle	</td> <td>	33	</td> <td>	62	</td> </tr>
<tr> <td>	A6	</td> <td>	Relief	</td> <td>	A	</td> <td>	hul	</td> <td>	hulle	</td> <td>	7	</td> <td>	1	</td> </tr>
<tr> <td>	A7	</td> <td>	Relief	</td> <td>	A	</td> <td>	pol	</td> <td>		</td> <td>	2	</td> <td>	39	</td> </tr>
<tr> <td>	A8	</td> <td>	Relief	</td> <td>	A	</td> <td>	hoop	</td> <td>		</td> <td>	2	</td> <td>		</td> </tr>
<tr> <td>	A9	</td> <td>	Relief	</td> <td>	A	</td> <td>	nor	</td> <td>	norre	</td> <td>	31	</td> <td>		</td> </tr>
<tr> <td>	B1	</td> <td>	Bodem	</td> <td>	B	</td> <td>	zand	</td> <td>	sand	</td> <td>	80	</td> <td>	36	</td> </tr>
<tr> <td>	B10	</td> <td>	Bodem	</td> <td>	B	</td> <td>	grijs	</td> <td>	grijze|grauw	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	B11	</td> <td>	Bodem	</td> <td>	B	</td> <td>	ele	</td> <td>		</td> <td>	1	</td> <td>	5	</td> </tr>
<tr> <td>	B12	</td> <td>	Bodem	</td> <td>	B	</td> <td>	bruin	</td> <td>	bruun	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	B2	</td> <td>	Bodem	</td> <td>	B	</td> <td>	leem	</td> <td>		</td> <td>	3	</td> <td>	2	</td> </tr>
<tr> <td>	B3	</td> <td>	Bodem	</td> <td>	B	</td> <td>	veen	</td> <td>		</td> <td>	279	</td> <td>	175	</td> </tr>
<tr> <td>	B4	</td> <td>	Bodem	</td> <td>	B	</td> <td>	klei	</td> <td>		</td> <td>	15	</td> <td>	122	</td> </tr>
<tr> <td>	B5	</td> <td>	Bodem	</td> <td>	B	</td> <td>	steen	</td> <td>	stien|stein	</td> <td>	88	</td> <td>	39	</td> </tr>
<tr> <td>	B6	</td> <td>	Bodem	</td> <td>	B	</td> <td>	kei	</td> <td>	kai|kaai	</td> <td>	2	</td> <td>		</td> </tr>
<tr> <td>	B7	</td> <td>	Bodem	</td> <td>	B	</td> <td>	zwart	</td> <td>		</td> <td>	10	</td> <td>	11	</td> </tr>
<tr> <td>	B8	</td> <td>	Bodem	</td> <td>	B	</td> <td>	wit	</td> <td>		</td> <td>	46	</td> <td>	44	</td> </tr>
<tr> <td>	B9	</td> <td>	Bodem	</td> <td>	B	</td> <td>	rood	</td> <td>	rode	</td> <td>	27	</td> <td>	32	</td> </tr>
<tr> <td>	C1	</td> <td>	Watermen	</td> <td>	C	</td> <td>	meer	</td> <td>	meren	</td> <td>	88	</td> <td>	28	</td> </tr>
<tr> <td>	C10	</td> <td>	Watermen	</td> <td>	C	</td> <td>	wiel	</td> <td>	waal	</td> <td>	1	</td> <td>	1	</td> </tr>
<tr> <td>	C11	</td> <td>	Watermen	</td> <td>	C	</td> <td>	zee	</td> <td>		</td> <td>		</td> <td>	3	</td> </tr>
<tr> <td>	C12	</td> <td>	Watermen	</td> <td>	C	</td> <td>	vals	</td> <td>	valsch	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	C13	</td> <td>	Watermen	</td> <td>	C	</td> <td>	weier	</td> <td>	weiert|weijert	</td> <td>	1	</td> <td>	4	</td> </tr>
<tr> <td>	C14	</td> <td>	Watermen	</td> <td>	C	</td> <td>	veentje	</td> <td>	veentie	</td> <td>		</td> <td>	3	</td> </tr>
<tr> <td>	C2	</td> <td>	Watermen	</td> <td>	C	</td> <td>	poel	</td> <td>		</td> <td>	19	</td> <td>	16	</td> </tr>
<tr> <td>	C3	</td> <td>	Watermen	</td> <td>	C	</td> <td>	dobbe	</td> <td>		</td> <td>	14	</td> <td>	3	</td> </tr>
<tr> <td>	C4	</td> <td>	Watermen	</td> <td>	C	</td> <td>	streng	</td> <td>		</td> <td>	33	</td> <td>	6	</td> </tr>
<tr> <td>	C5	</td> <td>	Watermen	</td> <td>	C	</td> <td>	diep	</td> <td>		</td> <td>	15	</td> <td>	24	</td> </tr>
<tr> <td>	C6	</td> <td>	Watermen	</td> <td>	C	</td> <td>	beek	</td> <td>	beeck	</td> <td>	18	</td> <td>	14	</td> </tr>
<tr> <td>	C7	</td> <td>	Watermen	</td> <td>	C	</td> <td>	water	</td> <td>		</td> <td>	4	</td> <td>		</td> </tr>
<tr> <td>	C8	</td> <td>	Watermen	</td> <td>	C	</td> <td>	kolk	</td> <td>		</td> <td>	6	</td> <td>	10	</td> </tr>
<tr> <td>	C9	</td> <td>	Watermen	</td> <td>	C	</td> <td>	leek	</td> <td>		</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	D1	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	broek	</td> <td>	broeken|broekje	</td> <td>	416	</td> <td>	221	</td> </tr>
<tr> <td>	D10	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	gagel	</td> <td>		</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	D11	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	moor	</td> <td>	moer|moerde	</td> <td>	1	</td> <td>		</td> </tr>
<tr> <td>	D12	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	goor	</td> <td>	gor	</td> <td>		</td> <td>	33	</td> </tr>
<tr> <td>	D13	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	sleek	</td> <td>	slijk	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	D14	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	rus	</td> <td>	rusch	</td> <td>	3	</td> <td>	6	</td> </tr>
<tr> <td>	D15	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	geel	</td> <td>	gele	</td> <td>	5	</td> <td>	28	</td> </tr>
<tr> <td>	D16	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	slob	</td> <td>	slom	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	D17	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	eis	</td> <td>		</td> <td>	1	</td> <td>	8	</td> </tr>
<tr> <td>	D18	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	schol	</td> <td>	scholte|school|schel	</td> <td>	6	</td> <td>	15	</td> </tr>
<tr> <td>	D19	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	sek	</td> <td>	sekke	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	D2	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	maat	</td> <td>	made|maad|maadje	</td> <td>	350	</td> <td>	246	</td> </tr>
<tr> <td>	D3	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	mars	</td> <td>		</td> <td>	18	</td> <td>	24	</td> </tr>
<tr> <td>	D4	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	vledder	</td> <td>	vleer|vlier|fleer|flier	</td> <td>	25	</td> <td>	15	</td> </tr>
<tr> <td>	D5	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	stroet	</td> <td>	stroot|stroe	</td> <td>	13	</td> <td>	5	</td> </tr>
<tr> <td>	D6	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	hem	</td> <td>	ham	</td> <td>	56	</td> <td>	19	</td> </tr>
<tr> <td>	D7	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	horst	</td> <td>	hurst	</td> <td>	23	</td> <td>	7	</td> </tr>
<tr> <td>	D8	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	oel	</td> <td>		</td> <td>	1	</td> <td>	5	</td> </tr>
<tr> <td>	D9	</td> <td>	Beekdal_Moeras	</td> <td>	D	</td> <td>	riet	</td> <td>	reit|raait|reet	</td> <td>	8	</td> <td>	8	</td> </tr>
<tr> <td>	E1	</td> <td>	Bossen	</td> <td>	E	</td> <td>	loo	</td> <td>		</td> <td>	1572	</td> <td>	63	</td> </tr>
<tr> <td>	E10	</td> <td>	Bossen	</td> <td>	E	</td> <td>	haag	</td> <td>	hagen|heeg|heg	</td> <td>		</td> <td>	44	</td> </tr>
<tr> <td>	E11	</td> <td>	Bossen	</td> <td>	E	</td> <td>	els	</td> <td>	elze|eller|elder	</td> <td>	20	</td> <td>	14	</td> </tr>
<tr> <td>	E12	</td> <td>	Bossen	</td> <td>	E	</td> <td>	hulst	</td> <td>	huls	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	E13	</td> <td>	Bossen	</td> <td>	E	</td> <td>	den	</td> <td>	denne	</td> <td>	118	</td> <td>	582	</td> </tr>
<tr> <td>	E14	</td> <td>	Bossen	</td> <td>	E	</td> <td>	esch|asch	</td> <td>		</td> <td>	59	</td> <td>	61	</td> </tr>
<tr> <td>	E15	</td> <td>	Bossen	</td> <td>	E	</td> <td>	wilg	</td> <td>	ween|wene|wede|wee|warff|warve|werff|werv	</td> <td>	7	</td> <td>	7	</td> </tr>
<tr> <td>	E16	</td> <td>	Bossen	</td> <td>	E	</td> <td>	eik	</td> <td>	eek|ekkel|eck	</td> <td>	1	</td> <td>	37	</td> </tr>
<tr> <td>	E17	</td> <td>	Bossen	</td> <td>	E	</td> <td>	hazel	</td> <td>	hessel	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	E18	</td> <td>	Bossen	</td> <td>	E	</td> <td>	struik	</td> <td>	stroek	</td> <td>	1	</td> <td>		</td> </tr>
<tr> <td>	E19	</td> <td>	Bossen	</td> <td>	E	</td> <td>	bramen	</td> <td>	brummel	</td> <td>		</td> <td>	10	</td> </tr>
<tr> <td>	E2	</td> <td>	Bossen	</td> <td>	E	</td> <td>	hees	</td> <td>	heeze|heze	</td> <td>	75	</td> <td>	20	</td> </tr>
<tr> <td>	E20	</td> <td>	Bossen	</td> <td>	E	</td> <td>	meidoorn	</td> <td>	hageldoorn	</td> <td>		</td> <td>	2	</td> </tr>
<tr> <td>	E21	</td> <td>	Bossen	</td> <td>	E	</td> <td>	doorn	</td> <td>		</td> <td>	775	</td> <td>	47	</td> </tr>
<tr> <td>	E22	</td> <td>	Bossen	</td> <td>	E	</td> <td>	bosbes	</td> <td>	kreus|kreuzen|krös|krözen	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	E23	</td> <td>	Bossen	</td> <td>	E	</td> <td>	zwartebosbes|blauwebosbes	</td> <td>	bliek|blik	</td> <td>		</td> <td>	5	</td> </tr>
<tr> <td>	E24	</td> <td>	Bossen	</td> <td>	E	</td> <td>	bessen	</td> <td>		</td> <td>	1	</td> <td>		</td> </tr>
<tr> <td>	E25	</td> <td>	Bossen	</td> <td>	E	</td> <td>	roos	</td> <td>	rosen|rozen	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	E26	</td> <td>	Bossen	</td> <td>	E	</td> <td>	stok	</td> <td>	stock	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	E3	</td> <td>	Bossen	</td> <td>	E	</td> <td>	stobbe	</td> <td>	stob	</td> <td>	61	</td> <td>	40	</td> </tr>
<tr> <td>	E4	</td> <td>	Bossen	</td> <td>	E	</td> <td>	bos	</td> <td>	bosch|busch	</td> <td>	251	</td> <td>	136	</td> </tr>
<tr> <td>	E5	</td> <td>	Bossen	</td> <td>	E	</td> <td>	hout	</td> <td>		</td> <td>	48	</td> <td>	29	</td> </tr>
<tr> <td>	E6	</td> <td>	Bossen	</td> <td>	E	</td> <td>	holt	</td> <td>		</td> <td>	120	</td> <td>	12	</td> </tr>
<tr> <td>	E7	</td> <td>	Bossen	</td> <td>	E	</td> <td>	laar	</td> <td>		</td> <td>	9	</td> <td>	8	</td> </tr>
<tr> <td>	E8	</td> <td>	Bossen	</td> <td>	E	</td> <td>	wold	</td> <td>	woold	</td> <td>	2	</td> <td>	20	</td> </tr>
<tr> <td>	E9	</td> <td>	Bossen	</td> <td>	E	</td> <td>	strubbe	</td> <td>		</td> <td>	10	</td> <td>	37	</td> </tr>
<tr> <td>	F1	</td> <td>	Veldgrond_stuifzand	</td> <td>	F	</td> <td>	veld	</td> <td>	velt	</td> <td>	162	</td> <td>	112	</td> </tr>
<tr> <td>	F10	</td> <td>	Veldgrond_stuifzand	</td> <td>	F	</td> <td>	lijsterbes	</td> <td>	kweekeboom	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	F2	</td> <td>	Veldgrond_stuifzand	</td> <td>	F	</td> <td>	heide	</td> <td>	heide|heet|hiet	</td> <td>	23	</td> <td>	8	</td> </tr>
<tr> <td>	F3	</td> <td>	Veldgrond_stuifzand	</td> <td>	F	</td> <td>	haar	</td> <td>	hare	</td> <td>	33	</td> <td>	20	</td> </tr>
<tr> <td>	F4	</td> <td>	Veldgrond_stuifzand	</td> <td>	F	</td> <td>	zuring	</td> <td>		</td> <td>	2	</td> <td>	2	</td> </tr>
<tr> <td>	F5	</td> <td>	Veldgrond_stuifzand	</td> <td>	F	</td> <td>	woest	</td> <td>		</td> <td>	4	</td> <td>	3	</td> </tr>
<tr> <td>	F6	</td> <td>	Veldgrond_stuifzand	</td> <td>	F	</td> <td>	wild	</td> <td>	wilden|wildernis	</td> <td>	1	</td> <td>	4	</td> </tr>
<tr> <td>	F7	</td> <td>	Veldgrond_stuifzand	</td> <td>	F	</td> <td>	ruig	</td> <td>	roege	</td> <td>	4	</td> <td>	5	</td> </tr>
<tr> <td>	F8	</td> <td>	Veldgrond_stuifzand	</td> <td>	F	</td> <td>	brem	</td> <td>	braam|broam|breem|bram	</td> <td>	1	</td> <td>	1	</td> </tr>
<tr> <td>	F9	</td> <td>	Veldgrond_stuifzand	</td> <td>	F	</td> <td>	wind	</td> <td>		</td> <td>	2	</td> <td>	8	</td> </tr>
<tr> <td>	G1	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	fazant|patrijs	</td> <td>	hunder|hoender|hoonder	</td> <td>	29	</td> <td>	15	</td> </tr>
<tr> <td>	G10	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	valk	</td> <td>		</td> <td>	12	</td> <td>		</td> </tr>
<tr> <td>	G11	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	kraanvogel	</td> <td>	kraan|krane|craan|crane	</td> <td>		</td> <td>	1	</td> </tr>
<tr> <td>	G12	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	reiger	</td> <td>		</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	G13	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	mus	</td> <td>		</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	G14	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	raaf	</td> <td>	raven	</td> <td>	14	</td> <td>		</td> </tr>
<tr> <td>	G15	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	duif	</td> <td>	duiven|duven|doef|doeven	</td> <td>	2	</td> <td>		</td> </tr>
<tr> <td>	G16	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	mees	</td> <td>	meeze	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	G17	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	ooievaar	</td> <td>	ooievaar|heileuver|ooievaar|eiber|scholbos|luibert	</td> <td>	1	</td> <td>		</td> </tr>
<tr> <td>	G18	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	kraai	</td> <td>		</td> <td>	2	</td> <td>		</td> </tr>
<tr> <td>	G19	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	spreeuw	</td> <td>	spree	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	G2	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	haan	</td> <td>	hane	</td> <td>	13	</td> <td>	20	</td> </tr>
<tr> <td>	G20	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	hond	</td> <td>	hund	</td> <td>	2	</td> <td>	1	</td> </tr>
<tr> <td>	G21	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	kat	</td> <td>		</td> <td>	4	</td> <td>	1	</td> </tr>
<tr> <td>	G22	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	bever	</td> <td>		</td> <td>		</td> <td>	1	</td> </tr>
<tr> <td>	G23	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	vos	</td> <td>		</td> <td>	5	</td> <td>	4	</td> </tr>
<tr> <td>	G24	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	wolf	</td> <td>	wolven	</td> <td>	10	</td> <td>	10	</td> </tr>
<tr> <td>	G25	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	haas	</td> <td>	hazen	</td> <td>	11	</td> <td>	11	</td> </tr>
<tr> <td>	G26	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	konijn	</td> <td>		</td> <td>	9	</td> <td>	5	</td> </tr>
<tr> <td>	G27	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	otter	</td> <td>		</td> <td>	1	</td> <td>	2	</td> </tr>
<tr> <td>	G28	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	das	</td> <td>		</td> <td>	1	</td> <td>	1	</td> </tr>
<tr> <td>	G29	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	adder	</td> <td>	edder	</td> <td>	7	</td> <td>	32	</td> </tr>
<tr> <td>	G3	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	uil	</td> <td>	oel	</td> <td>	4	</td> <td>	9	</td> </tr>
<tr> <td>	G30	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	mug	</td> <td>		</td> <td>	1	</td> <td>	1	</td> </tr>
<tr> <td>	G31	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	luis	</td> <td>	luizen	</td> <td>	2	</td> <td>		</td> </tr>
<tr> <td>	G32	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	bij	</td> <td>	iemen|ymen|yemen	</td> <td>	24	</td> <td>	4	</td> </tr>
<tr> <td>	G33	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	bloedzuiger	</td> <td>	egel|iegel	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	G34	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	aal	</td> <td>	alen	</td> <td>	3	</td> <td>		</td> </tr>
<tr> <td>	G35	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	vis	</td> <td>	visch	</td> <td>	6	</td> <td>	6	</td> </tr>
<tr> <td>	G4	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	ekster	</td> <td>	aakster|okster	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	G5	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	kievit	</td> <td>	kiewiet|kieft|Kieviet	</td> <td>	6	</td> <td>	6	</td> </tr>
<tr> <td>	G6	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	eend	</td> <td>	ent	</td> <td>	9	</td> <td>	3	</td> </tr>
<tr> <td>	G7	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	gans	</td> <td>	ganzen|gaans|gaanzen|goos|gozen|goes	</td> <td>	2	</td> <td>	3	</td> </tr>
<tr> <td>	G8	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	snip	</td> <td>		</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	G9	</td> <td>	Wilde_dieren	</td> <td>	G	</td> <td>	leeuwerik	</td> <td>		</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	O1	</td> <td>	Overig	</td> <td>	O	</td> <td>	sassen	</td> <td>		</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	O10	</td> <td>	Overig	</td> <td>	O	</td> <td>	wed	</td> <td>	wet	</td> <td>	32	</td> <td>	38	</td> </tr>
<tr> <td>	O11	</td> <td>	Overig	</td> <td>	O	</td> <td>	dansel	</td> <td>		</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	O12	</td> <td>	Overig	</td> <td>	O	</td> <td>	walg	</td> <td>		</td> <td>	1	</td> <td>	2	</td> </tr>
<tr> <td>	O13	</td> <td>	Overig	</td> <td>	O	</td> <td>	alk	</td> <td>	halk	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	O14	</td> <td>	Overig	</td> <td>	O	</td> <td>	hartzeer	</td> <td>		</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	O15	</td> <td>	Overig	</td> <td>	O	</td> <td>	buis	</td> <td>		</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	O16	</td> <td>	Overig	</td> <td>	O	</td> <td>	helmer	</td> <td>		</td> <td>		</td> <td>	1	</td> </tr>
<tr> <td>	O17	</td> <td>	Overig	</td> <td>	O	</td> <td>	staart	</td> <td>		</td> <td>	3	</td> <td>	5	</td> </tr>
<tr> <td>	O18	</td> <td>	Overig	</td> <td>	O	</td> <td>	vlas	</td> <td>		</td> <td>	4	</td> <td>		</td> </tr>
<tr> <td>	O2	</td> <td>	Overig	</td> <td>	O	</td> <td>	bol	</td> <td>		</td> <td>	21	</td> <td>	20	</td> </tr>
<tr> <td>	O3	</td> <td>	Overig	</td> <td>	O	</td> <td>	viool	</td> <td>	violen	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	O4	</td> <td>	Overig	</td> <td>	O	</td> <td>	distel	</td> <td>	dissel|diesel	</td> <td>		</td> <td>		</td> </tr>
<tr> <td>	O5	</td> <td>	Overig	</td> <td>	O	</td> <td>	bloem	</td> <td>		</td> <td>		</td> <td>	8	</td> </tr>
<tr> <td>	O6	</td> <td>	Overig	</td> <td>	O	</td> <td>	ronsel	</td> <td>		</td> <td>	18	</td> <td>		</td> </tr>
<tr> <td>	O7	</td> <td>	Overig	</td> <td>	O	</td> <td>	mos	</td> <td>		</td> <td>	3	</td> <td>	3	</td> </tr>
<tr> <td>	O8	</td> <td>	Overig	</td> <td>	O	</td> <td>	klaver	</td> <td>		</td> <td>	2	</td> <td>	22	</td> </tr>
<tr> <td>	O9	</td> <td>	Overig	</td> <td>	O	</td> <td>	groen	</td> <td>		</td> <td>	1	</td> <td>	3	</td> </tr>
<tr> <td>	W1	</td> <td>	Wind	</td> <td>	W	</td> <td>	oost	</td> <td>	ooster	</td> <td>	121	</td> <td>	33	</td> </tr>
<tr> <td>	W2	</td> <td>	Wind	</td> <td>	W	</td> <td>	noord	</td> <td>	noorder	</td> <td>	25	</td> <td>	18	</td> </tr>
<tr> <td>	W3	</td> <td>	Wind	</td> <td>	W	</td> <td>	west	</td> <td>	wester	</td> <td>	8	</td> <td>	20	</td> </tr>
<tr> <td>	W4	</td> <td>	Wind	</td> <td>	W	</td> <td>	zuid	</td> <td>	zuider	</td> <td>	11	</td> <td>	44	</td> </tr>
</table>



<h2 class="nocount" id="A5">Annex 5. Leaflet map initializing </h2>

    var basemaps ={ 
      "_1830": L.tileLayer("http://s.map5.nl/map/gast/tiles/tmk_1850/EPSG900913/{z}/{x}/{y}.png" ),
      "_2015": L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),
      "Hoogte": L.tileLayer("http://s.map5.nl/map/gast/tiles/relief_struct/EPSG900913/{z}/{x}/{y}.jpeg")
    };

    var map = new L.map("map", {
      maxZoom: 15,
      minZoom: 12,
      layers: basemaps._1830
    });

    map.setView([53.079529, 6.614894], 14);
    map.setMaxBounds([
      [52.861743, 6.458972],
      [53.202277, 6.958035]
    ]);

<h2 class="nocount" id="A6">Annex 6. AHN pre-processing </h2>

<figure class="text-wrap-left">
<p class="fig">  AHN2 from the research area </p>
<img src="img/ahn.jpg">
</figure>

The AHN2 tiles covering the research area were downloaded from nationaalgeoregister.nl to show the relation of the field-names with the environment. The AHN has proved useful for historical research. Small differences in the landscape can be seen in the AHN2 and already historians and archaeologist use it to discover old settlements that can’t be discovered with the naked eye. (Actueel Hoogtebestand Nederland, n.d.)The AHN is measured with laser altimetry or LIDAR. Laser beams shot from an airplane and localized with GPS. It is measured over several time periods and merged in the end to get a detailed measurement of the height. The eventual end product delivered is corrected to ground level.(maaiveld) So vegetation, buildings and other object do not appear. (Actueel Hoogtebestand Nederland, n.d.) These filtered areas are given no-data values. The raster data has a resolution of 5 meters and a precision of systematic and stochastic error of max 5 cm the projection is RD new ( EPSG28992). (Actueel Hoogtebestand Nederland, n.d.) The maximum and minimum values of the total area are 29.5 and -1.9 meters respectively.

<p class="table" > AHN tiles downloaded:</p>

<table>
 <tr> <td> ahn2_5_07cz1.tif</td> <td>   ahn2_5_12en1.tif </td> </tr>
<tr> <td> ahn2_5_07cz2.tif</td> <td>   ahn2_5_12en2.tif </td> </tr>
<tr> <td> ahn2_5_07dz1.tif</td> <td>   ahn2_5_12ez1.tif </td> </tr>
<tr> <td> ahn2_5_07dz2.tif</td> <td>   ahn2_5_12ez2.tif</td> </tr>
<tr> <td> ahn2_5_11fz2.tif	</td> <td>   ahn2_5_12fn1.tif  </td> </tr>
<tr> <td> ahn2_5_12an1.tif</td> <td>   ahn2_5_12fn2.tif  </td> </tr>
<tr> <td> ahn2_5_12an2.tif</td> <td>   ahn2_5_12fz1.tif  </td> </tr>
<tr> <td> ahn2_5_12az1.tif</td> <td>   ahn2_5_12fz2.tif  </td> </tr>
<tr> <td> ahn2_5_12az2.tif</td> <td>   ahn2_5_12gn1.tif </td> </tr>
<tr> <td> ahn2_5_12bn1.tif</td> <td>   ahn2_5_12gn2.tif </td ></tr>
<tr> <td> ahn2_5_12bn2.tif</td> <td>   ahn2_5_12gz1.tif </td> </tr>
<tr> <td> ahn2_5_12bz1.tif</td> <td>   ahn2_5_12gz2.tif </td> </tr>
<tr> <td> ahn2_5_12bz2.tif</td> <td>   ahn2_5_12hn1.tif </td> </tr>
<tr> <td> ahn2_5_12cn1.tif</td> <td>   ahn2_5_12hn2.tif </td> </tr>
<tr> <td> ahn2_5_12cn2.tif</td> <td>   ahn2_5_12hz1.tif </td> </tr>
<tr> <td> ahn2_5_12cz1.tif</td> <td>   ahn2_5_17bn2.tif </td> </tr>
<tr> <td> ahn2_5_12cz2.tif</td> <td>   ahn2_5_17en1.tif  </td> </tr>
<tr> <td> ahn2_5_12dn1.tif</td> <td>   ahn2_5_17en2.tif </td> </tr>
<tr> <td> ahn2_5_12dn2.tif</td> <td>   ahn2_5_12en1.tif </td> </tr>
<tr> <td> ahn2_5_12dz1.tif</td> <td>   ahn2_5_12en2.tif </td> </tr>
<tr> <td> ahn2_5_12dz2.tif</td> <td>   ahn2_5_12ez1.tif </td> </tr>
<tr> <td> ahn2_5_12fn1.tif	</td> <td>   ahn2_5_12ez2.tif </td> </tr>
</table>

For use in the application, the transect line looks best when not containing any gaps. Therefore, the no-data values are filled by the fill no-data tool of Qgis. This takes an average of around 100 pixels to calculate the average height of the missing pixels.

<figure >
  <figcaption>  Flowchart AHN2 raster processing  </figcaption>
  <img src="img/ahnpreprocessing.jpg">
</figure> 

<h2 class="nocount" id="A7">Annex 7. Water topologies pre-processing</h2>

The water bodies are downloaded from the open data PDOK.nl. The Top10NLactueel contains all topology of the Netherlands on a scale of 1:25.000. From this dataset only the water polygons are used and clipped to the research area. So the names of the water bodies can be included into the application. (“TOP10NL | Publieke Dienstverlening Op de Kaart Loket,” n.d.)
All in EPSG28992. 

<p class="table"> Map sheets Top10NL downloaded </p>

<table>
  <tr> <td>Top10NL_17O</td> <td>Top10NL_1rW</td> <td>Top10NL_1rO</td> <td>Top10NL_1rW</td></tr>
</table>


<h2 class="nocount" id="A8">Annex 8. Loading data into the PostGIS database </h2>

<p class="fig"> Loading data into the database</p>

![Alt text](img/loading_Data.jpg ) 

<p class="code"> Loading data in the database </p>

    Shp2pgsql
    ➜  ~ shp2pgsql -s 28992 /<path name> /veldnamen.shp veldnamen | psql -U user -d veldnamen
        
    Raster2pgsql
    ➜  ~ raster2pgsql -s 28992 -I -C /<path name>/ahn2*.tif public.ahn2 | psql -d veldnamen

<h2 class="nocount" id="A9">Annex 9. Request & Response for transect line </h2>

<p class="code">  D3 request coordinates and drawing transect path  </p>

    d3.json("transect?linestring=" + coordinates, function(json){
      console.log("requesting line from database");
      console.log(json)
      var line = d3.select("#line")
      line.selectAll(".transect")
      .data(linestring)
      .enter()
      .append("path")
      .attr("class", "transect")
      .attr("d", lineFunction(json))
      .attr("stroke", "#2B2118")
      .attr("stroke-width", 3)
      .attr("fill", "none");
    });
    

After a line is drawn on the Leaflet map with Leaflet Draw, the coordinates  of the line are inserted into the request ($1) as a LINESTRING format. The line is in WGS84 (EPSG4326) and needs to be converted to RDNew (EPSG28992) in order to extract the location with the other data at the right location.

<p class="code"> Request & Response for transect line </p>
 
    app.get("/transect", function (req, res) {
      query(queries.transect, ["LINESTRING (" + req.query.linestring + ")"] , function(err, result) {
        if (err) {
        res.status(500).send(err);
        } else {
        res.send(result.rows.map(function(row) {
          row.geometry = JSON.parse(row.geometry);
          return row;
        }));
        }
      })
    });

<p class="code"> The line</p>
   
    WITH line AS
      -- Create line geometry
      (SELECT ST_Transform(ST_GeomFromText($1 , 4326), 28992) AS geom),
   
The line is then cut into parts of 10 meter and points are generated with its percentage location along the line. 

<p class="code"> Point and percentage at every 10 meter along the line</p>

    linemesure AS
      (SELECT ST_AddMeasure(line.geom, 0, ST_Length(line.geom)) as linem,
      generate_series(0, ST_Length(line.geom)::int, 10) as i
      FROM line),

    points2d AS
      (SELECT ST_GeometryN(ST_LocateAlong(linem, i), 1) AS geom, (i*100/ST_Length(linem)) as percentage
      FROM linemesure),

This array of points is intersected with the  AHN table to ext rat the height value for every point. 

<p class="code"> Get height per point</p>

    AHN AS
      -- Get DEM elevation for each
      (SELECT p.geom AS geom, ST_Value(ahn.rast, 1, p.geom) AS heights, percentage
        FROM ahn, points2d p
        WHERE ST_Intersects(ahn.rast, p.geom)),

Also the points are intersected with the field names table to see if a points falls into a field, and which name and category code it belongs to. 

<p class="code">  Get field-name for intersecting points</p>

    fields AS
      (SELECT naam AS naam, code_1_ AS category1, code_2 AS category2, ST_Intersection(p.geom, veldnamen2.geom) AS geoms
      FROM veldnamen2, points2d p 
      WHERE ST_Intersects(veldnamen2.geom, p.geom)),


Then the points are intersected with the water topology table to see if a points falls into a water body, and which name and category code it belongs to. 

<p class="code">  Get field-name for intersecting points</p>

    --Get Water intersects
    waters As
      (SELECT naamnl AS waternaam, typewater AS typewater, identifica AS waterId, ST_Intersection(p.geom, water.geom) AS geomz
      FROM water, points2d p
      WHERE ST_Intersects(water.geom, p.geom)),

In the end all point that fall into a field or water body are joined to the total amount of points to contain the whole range of points. 

<p class="code">  Join all outcomes</p>

    points AS
    (SELECT *  FROM AHN LEFT OUTER JOIN fields ON (AHN.geom = fields.geoms)),

    points1 AS
    (SELECT * FROM points LEFT OUTER JOIN waters ON (points.geom = waters.geomz))

This is all send back as one complete GeoJSON response. 

<p class="code">  final GeoJSON response</p>

    -- Make points:
    SELECT ST_AsGeoJSON(ST_MakePoint(ST_X(ST_Transform(ST_SetSRID(geom, 28992),4326)), ST_Y(ST_Transform(ST_SetSRID(geom, 28992),4326)), heights)) 
    
    AS geometry, naam, heights, percentage , category1, category2, waternaam, typewater, waterID
    FROM points1
   
 Eventually the response of the request will be a GeoJSON. An example of the GeoJSON array is shown below.
 
<p class="code">  Example GeoJSON response</p>

    [
      {
        "geometry": {
          "type": "Point",
          "coordinates": [
            6.6089395293246,
            53.0818691708253,
            8.05700016021729
          ]
        },
        "naam": "Zuurpol (de)",
        "heights": 8.05700016021729,
        "percentage": 0.826035566357403,
        "category1": "A1",
        "category2": null,
        "waternaam": null,
        "typewater": null,
        "waterid": null
      },
      {…},
      {…},
      {
        "geometry": {
          "type": "Point",
          "coordinates": [
            6.62981923722014,
            53.0856490864126,
            4.8439998626709
          ]
        },
        "naam": "Gryze Steen",
        "heights": 4.8439998626709,
        "percentage": 55.5813292359005,
        "category1": null,
        "category2": null,
        "waternaam": null,
        "typewater": "meer, plas, ven, vijver",
        "waterid": "NL.TOP10NL.128375900"
      },
      {…},
    ]


<h2 class ="nocount" id="A10">Annex 10. Questionnaire for testing the application </h2>

![](img\Vragenlijst Veldnamen Applicatie.jpg) 

<h2 class ="nocount" id="A11">Annex 11.  Mood board </h2>

![Alt text](img/Moodboard-01.jpg)
![Alt text](img/Moodboard-02.jpg)

	
<h2 class ="nocount" id="A12">Annex 12. Variations on the main idea </h2>

For also on this main idea some variations can be made, these will be listed here.

- Soil properties as colours of the fields. Or pattern of the specific soil type. Like stones, clay, sand etc.
Giving colours or patterns to the fields according to the soil property. Like a *Stonefield* or *Redfield*.
- Pop-ups with explanations and texts. Linking field-names to textual explanation, adding pictures of the surroundings and landscape characteristics. Vegetation types, animal occurrence.
- Adding pictures or symbols of vegetation types and animals on the transect line. As well as houses to indicate towns and cities. Water bodies as blue dips in the transect line. Give more explanation per category or field-name type. Include pictures of trees, shrubs, plants or animals with which the field-name is connected.
- Creating a small 3D landscape by adding multiple transect lines, stacked in front of each other.
- Link stories provided to the line, so pop-ups with provided stories from the book.

<h2 class ="nocount" id="A13">Annex 13. Answers on the questionnaire </h2>

![](img/antwoorden.jpg)

<h2 class ="nocount" id="A14">Annex 14. Remarks on the questionnaire </h2>

- Works logical, though information is missing.
- Make the pop-up disappear when the mouse moves away.
- I miss a total overview of the page.
- Finish line, not working.. 
- The elevation graph should follow the x,y of mouse instead of following just x.
- Text window sometimes conflicts with the layer selector.
- Cursor on the map synchronises with the moving circle on the line.
- Also point selection, not only line.
- Ugly button on the introduction page.
- I would like to know more about the different map layers.
- Drawing button for the line is hard to find.
- While waiting, put a waiting sign.
- You would expect the information about the field to pop up when the moving circle is on the field, instead of the mouse.
- Ask people for collaboration, for example make a text-editor do the texts. 
- Typography was hard to read. 
- A lot of introduction text.
- Looks like the focus is more on the height then on the names. 
- Drawing the line and clicking was difficult, had to get used to it. Nice view into height differences. Though I don't understand the origin of the field names yet. The line shows weird peaks, I would like to know what this is. 
- I would like to have this for the area I live in.  
- With long lines, the names are on top of each other.
- Clicking last point of the line to finish it was difficult to find.
- Nice that you really learn something about the names through the information.
- Put the year on the map. 
- Some targeted assignments would help understanding the field-names better. 
- Nice, I would like to have this were I am personally living.
- More locations would be nice. 
- Layout of the map is nice, but some this could be made more readable. 
- Continue!
- Unpredictable behaviour with drawing the line.
- Can't get the results good on the screen.
- Text at the bottom is not readable.
