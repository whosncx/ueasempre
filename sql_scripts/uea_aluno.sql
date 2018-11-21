--
-- PostgreSQL database dump
--

-- Dumped from database version 10.5
-- Dumped by pg_dump version 10.5

-- Started on 2018-11-17 17:55:26

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 196 (class 1259 OID 16395)
-- Name: uea_aluno; Type: TABLE; Schema: public; Owner: ueasistemas
--

CREATE TABLE public.uea_aluno (
    aluno_id character varying(12) NOT NULL,
    aluno_nome character varying(100) NOT NULL,
    aluno_email character varying(200),
    aluno_facebook character varying(200),
    aluno_linkedin character varying(200),
    aluno_whatsapp character varying(20),
    aluno_ano_ingresso integer NOT NULL,
    aluno_ano_conclusao integer,
    aluno_situacao integer NOT NULL,
    aluno_discente_situacao integer NOT NULL,
    aluno_discente_funcao character varying(100),
    aluno_discente_instituicao character varying(200),
    aluno_egresso_situacao integer,
    aluno_egresso_instituicao character varying(200),
    aluno_egresso_funcao character varying(100),
    aluno_status integer NOT NULL,
    aluno_matricula character varying(10) NOT NULL,
    aluno_uea_unidade integer NOT NULL,
    aluno_uea_curso integer NOT NULL,
    aluno_senha text
);


ALTER TABLE public.uea_aluno OWNER TO ueasistemas;

--
-- TOC entry 2803 (class 0 OID 16395)
-- Dependencies: 196
-- Data for Name: uea_aluno; Type: TABLE DATA; Schema: public; Owner: ueasistemas
--

COPY public.uea_aluno (aluno_id, aluno_nome, aluno_email, aluno_facebook, aluno_linkedin, aluno_whatsapp, aluno_ano_ingresso, aluno_ano_conclusao, aluno_situacao, aluno_discente_situacao, aluno_discente_funcao, aluno_discente_instituicao, aluno_egresso_situacao, aluno_egresso_instituicao, aluno_egresso_funcao, aluno_status, aluno_matricula, aluno_uea_unidade, aluno_uea_curso, aluno_senha) FROM stdin;
1	Stirling St. Quintin	sst0@ocn.ne.jp	http://wikipedia.org	http://blinklist.com	865-363-9007	2010	2010	1	1	1	Regions Financial Corporation	1	Dawson Geophysical Company	1	1	83651270	1	2	\N
2	Kara-lynn Bysh	kbysh1@paypal.com	http://ed.gov	https://taobao.com	598-105-9909	1997	2008	2	1	1	Comtech Telecommunications Corp.	0	Pharmerica Corporation	2	0	72823372	1	3	\N
3	Trula Moisey	tmoisey2@pagesperso-orange.fr	http://sogou.com	https://sphinn.com	991-243-7305	1999	2005	3	1	1	J.B. Hunt Transport Services, Inc.	1	Summit Materials, Inc.	2	0	87170044	1	1	\N
4	Shelton Erangy	serangy3@skyrock.com	https://desdev.cn	https://nifty.com	172-787-4363	2006	2004	4	1	1	ANSYS, Inc.	0	Easterly Acquisition Corp.	4	0	86838301	1	1	\N
5	Daile Bristo	dbristo4@businessweek.com	http://dion.ne.jp	http://booking.com	793-323-4569	2003	1996	5	1	1	Regulus Therapeutics Inc.	1	Stellar Biotechnologies, Inc.	3	1	66415192	1	2	\N
6	Marleah Charlesworth	mcharlesworth5@imgur.com	http://ted.com	http://mashable.com	295-961-9330	2011	2003	6	1	1	Bank of the Ozarks	1	First Foundation Inc.	4	0	66880761	1	2	\N
7	Waylan Snowling	wsnowling6@cocolog-nifty.com	http://constantcontact.com	http://freewebs.com	425-865-6571	2010	2002	7	1	1	MFA Financial, Inc.	0	Sina Corporation	3	0	67026064	1	1	\N
8	Logan Syddie	lsyddie7@alexa.com	https://pbs.org	https://walmart.com	467-482-6116	2012	2003	8	1	1	Seadrill Limited	1	M/I Homes, Inc.	5	0	86254094	1	3	\N
9	Gael Beardsdale	gbeardsdale8@ted.com	http://amazon.co.jp	http://networkadvertising.org	233-689-7416	1990	1994	9	1	1	MaxPoint Interactive, Inc.	0	Liberty Global plc	2	0	63019204	1	2	\N
10	Pacorro Broxton	pbroxton9@yahoo.co.jp	https://google.com.hk	http://epa.gov	302-271-3517	2005	1992	10	1	1	Allergan plc.	0	Huntington Bancshares Incorporated	4	1	14037115	1	2	\N
11	Jaclin Pre	jprea@sphinn.com	https://over-blog.com	https://fc2.com	432-615-4769	1988	1972	11	1	1	Wells Fargo & Company	1	Pioneer High Income Trust	2	1	28544449	1	2	\N
12	Madlen Hamsson	mhamssonb@cam.ac.uk	https://mozilla.org	http://bloomberg.com	545-886-9216	2005	2008	12	1	1	PC Connection, Inc.	1	Ideal Power Inc.	4	1	36274105	1	3	\N
13	Fina Cullimore	fcullimorec@economist.com	https://mozilla.com	http://typepad.com	868-334-3435	2007	2001	13	1	1	TeleTech Holdings, Inc.	1	Concordia International Corp.	5	0	96444130	1	1	\N
14	Shantee Pavluk	spavlukd@gravatar.com	https://time.com	https://tripod.com	375-632-9296	2009	2006	14	1	1	Global Sources Ltd.	1	BP Prudhoe Bay Royalty Trust	3	1	88445551	1	1	\N
15	Brantley Tewkesberrie	btewkesberriee@printfriendly.com	http://shop-pro.jp	http://hibu.com	616-164-9682	2009	1992	15	1	1	CF Corporation	0	Prudential Public Limited Company	1	1	34104989	1	3	\N
16	Jeralee Muddiman	jmuddimanf@yahoo.co.jp	http://pagesperso-orange.fr	http://seesaa.net	645-542-7241	2008	1986	16	1	1	State Street Corporation	1	Medovex Corp.	2	0	58567202	1	2	\N
17	Jacquenette Korneichik	jkorneichikg@wikia.com	http://foxnews.com	https://nsw.gov.au	324-330-7380	2002	2007	17	1	1	BlackRock Credit Allocation Income Trust	1	Aspen Aerogels, Inc.	4	0	49646950	1	3	\N
18	Gillie Beresford	gberesfordh@bloglovin.com	http://gov.uk	https://yelp.com	281-362-4451	2004	2011	18	1	1	Noble Energy Inc.	0	Chemours Company (The)	3	1	43947887	1	1	\N
19	Angelique Klimkowski	aklimkowskii@slideshare.net	http://google.nl	https://pen.io	323-589-2674	2012	1987	19	1	1	Medley LLC	1	Alon USA Partners, LP	3	1	62823488	1	3	\N
20	Carlynn Chiverstone	cchiverstonej@seesaa.net	https://usgs.gov	http://aol.com	384-670-8475	2007	1999	20	1	1	Assured Guaranty Ltd.	1	Globus Maritime Limited	2	0	11043533	1	2	\N
21	Ludwig Greated	lgreatedk@chron.com	https://fc2.com	https://odnoklassniki.ru	890-296-5637	1994	1997	21	1	1	TCF Financial Corporation	1	BCB Bancorp, Inc. (NJ)	1	1	05736307	1	2	\N
22	Lindsay Goodbar	lgoodbarl@wordpress.org	https://scribd.com	https://51.la	864-889-2242	2006	1999	22	1	1	First Trust RBA Quality Income ETF	0	Cesca Therapeutics Inc.	1	0	54871312	1	1	\N
23	Vera McCreagh	vmccreaghm@gizmodo.com	https://scientificamerican.com	https://issuu.com	263-725-7061	2007	1978	23	1	1	ONE Gas, Inc.	0	Thermo Fisher Scientific Inc	1	1	37793122	1	1	\N
24	Abbye Stockdale	astockdalen@yolasite.com	http://go.com	http://cornell.edu	925-244-6242	1997	1999	24	1	1	Getty Realty Corporation	0	Baidu, Inc.	4	1	39865891	1	2	\N
25	Guenevere Semken	gsemkeno@eepurl.com	https://printfriendly.com	https://webmd.com	386-933-8459	2003	1995	25	1	1	SeaWorld Entertainment, Inc.	1	eBay Inc.	5	0	18150495	1	1	\N
26	Alva Pay	apayp@yandex.ru	https://blogger.com	http://aboutads.info	217-749-8217	1995	2004	26	1	1	Prana Biotechnology Ltd	0	TerraVia Holdings, Inc.	1	0	49639027	1	2	\N
27	Sven Chomley	schomleyq@tmall.com	http://mit.edu	https://usatoday.com	491-763-5436	1986	2002	27	1	1	Ameren Corporation	1	Bio-Rad Laboratories, Inc.	2	1	09331209	1	1	\N
28	Shayne Pautard	spautardr@tmall.com	https://merriam-webster.com	http://nifty.com	114-609-4364	1993	1988	28	1	1	Seaspan Corporation	0	Keysight Technologies Inc.	3	1	17661740	1	3	\N
29	Barbette Mumbey	bmumbeys@auda.org.au	https://techcrunch.com	http://umn.edu	679-386-6969	2000	1993	29	1	1	NetEase, Inc.	0	YPF Sociedad Anonima	3	0	23013745	1	2	\N
30	Ethyl Oxer	eoxert@csmonitor.com	https://shareasale.com	http://mozilla.com	947-322-9576	2005	2008	30	1	1	Origo Acquisition Corporation	1	Harmonic Inc.	1	1	88981046	1	1	\N
31	Haley Schoales	hschoalesu@fc2.com	https://facebook.com	https://bloglines.com	334-805-1243	2004	2009	31	1	1	Hailiang Education Group Inc.	0	GasLog LP.	4	0	65356337	1	1	\N
32	Rickie Cox	rcoxv@slideshare.net	http://prweb.com	https://weibo.com	280-848-9993	1996	2004	32	1	1	CymaBay Therapeutics Inc.	1	The York Water Company	5	1	16130525	1	3	\N
33	Mohandas Gath	mgathw@state.gov	http://admin.ch	https://ca.gov	661-413-4543	2006	1992	33	1	1	Myriad Genetics, Inc.	0	Invesco Municipal Income Opportunities Trust	1	1	18224285	1	2	\N
34	Cully Levane	clevanex@wunderground.com	http://mapy.cz	https://europa.eu	472-885-5512	2007	2004	34	1	1	Calithera Biosciences, Inc.	1	Vanguard Short-Term Corporate Bond ETF	2	0	30396627	1	3	\N
35	Kimmy Hebson	khebsony@weibo.com	http://admin.ch	https://delicious.com	849-556-4500	2007	2008	35	1	1	Eaton Vance NextShares Trust	0	Yum China Holdings, Inc.	2	0	93047689	1	1	\N
36	Mala Willett	mwillettz@imdb.com	http://tamu.edu	http://topsy.com	783-748-6029	2004	2008	36	1	1	NutriSystem Inc	1	Mattel, Inc.	4	0	86901429	1	3	\N
37	Andy Duester	aduester10@blogspot.com	https://myspace.com	http://cdbaby.com	522-581-1829	1959	2012	37	1	1	A V Homes, Inc.	0	Triumph Group, Inc.	4	0	49829815	1	1	\N
38	Risa Tallyn	rtallyn11@discuz.net	https://scientificamerican.com	http://gravatar.com	760-484-3683	2012	2007	38	1	1	Valeritas Holdings, Inc.	0	Chesapeake Lodging Trust	2	1	52418249	1	2	\N
39	Reggi Colecrough	rcolecrough12@omniture.com	https://imageshack.us	http://hc360.com	337-246-2749	2002	2002	39	1	1	Edge Therapeutics, Inc.	0	Apricus Biosciences, Inc.	2	1	21677842	1	1	\N
40	Tull Del Dello	tdel13@weibo.com	https://answers.com	http://hubpages.com	509-986-8562	1995	2010	40	1	1	CalAtlantic Group, Inc.	0	MS Structured Asset Corp Saturns GE Cap Corp Series 2002-14	5	0	27979804	1	3	\N
41	Donna Taggert	dtaggert14@who.int	https://walmart.com	https://ucsd.edu	336-301-9236	1967	2002	41	1	1	Customers Bancorp, Inc	1	Sysco Corporation	3	0	19962097	1	1	\N
42	Sharline MacArd	smacard15@addthis.com	http://people.com.cn	http://shop-pro.jp	467-318-7777	2005	2002	42	1	1	First Trust SSI Strategic Convertible Securities ETF	0	CryoPort, Inc.	1	0	18656449	1	3	\N
43	Irwin MacGorley	imacgorley16@whitehouse.gov	http://usatoday.com	https://i2i.jp	615-323-6218	1998	1997	43	1	1	II-VI Incorporated	0	Heidrick & Struggles International, Inc.	1	1	47588097	1	1	\N
44	Leeland Wickes	lwickes17@craigslist.org	https://nifty.com	https://bloglines.com	628-772-7949	2010	2007	44	1	1	Source Capital, Inc.	0	SeaSpine Holdings Corporation	3	1	41794441	1	3	\N
45	Tom Dudenie	tdudenie18@boston.com	https://senate.gov	http://hao123.com	689-880-1622	2001	1998	45	1	1	Syngenta AG	0	WashingtonFirst Bankshares Inc	4	1	64697542	1	2	\N
46	Whitney Scud	wscud19@furl.net	http://twitpic.com	https://ucla.edu	941-268-3954	2005	2001	46	1	1	Anworth Mortgage Asset  Corporation	0	Heartland Express, Inc.	4	1	29357600	1	1	\N
47	Joyan Winterbottom	jwinterbottom1a@cbsnews.com	http://facebook.com	https://opera.com	798-471-6992	2010	2003	47	1	1	JD.com, Inc.	1	SG Blocks, Inc.	1	1	37121339	1	2	\N
48	Melina Minker	mminker1b@printfriendly.com	https://4shared.com	http://census.gov	430-682-7494	1999	2000	48	1	1	Forward Pharma A/S	0	Capitol Acquisition Corp. III	1	0	63400874	1	2	\N
49	Anna-maria Woloschinski	awoloschinski1c@tripadvisor.com	https://elpais.com	http://examiner.com	475-122-5501	1999	1997	49	1	1	Lennox International, Inc.	0	Hartford Financial Services Group, Inc. (The)	4	1	57896829	1	2	\N
50	Binni Chance	bchance1d@google.com	http://jiathis.com	http://independent.co.uk	713-872-1562	2001	1997	50	1	1	Champions Oncology, Inc.	0	Whitestone REIT	5	0	10533470	1	3	\N
51	Lynde Collicott	lcollicott1e@livejournal.com	https://yelp.com	http://telegraph.co.uk	402-827-5268	2012	1999	51	1	1	CoBiz Financial Inc.	1	Enterprise Bancorp Inc	4	0	98202960	1	1	\N
52	Rheba Gutans	rgutans1f@pagesperso-orange.fr	https://webnode.com	https://noaa.gov	969-525-2331	2011	2008	52	1	1	Allegion plc	0	Whiting Petroleum Corporation	2	0	09675612	1	3	\N
53	Cora Froude	cfroude1g@artisteer.com	https://godaddy.com	https://jigsy.com	548-548-0383	2008	1993	53	1	1	Calamos Convertible Opportunities and Income Fund	0	Devon Energy Corporation	4	0	31611012	1	2	\N
54	Yule Aldiss	yaldiss1h@spotify.com	http://utexas.edu	http://zimbio.com	620-179-6426	2012	2007	54	1	1	RiverNorth Opportunities Fund, Inc.	1	Entergy Mississippi, Inc.	2	1	46706468	1	1	\N
55	Prudence Niland	pniland1i@umn.edu	http://huffingtonpost.com	https://ning.com	310-647-8384	2002	2010	55	1	1	Wells Fargo & Company	0	Bank of America Corporation	2	0	86098799	1	1	\N
56	Loralie Cawt	lcawt1j@feedburner.com	http://walmart.com	http://yolasite.com	464-904-5022	1993	2003	56	1	1	Berry Global Group, Inc.	0	Veritiv Corporation	2	1	39175121	1	2	\N
57	Alidia MacSorley	amacsorley1k@1und1.de	http://gravatar.com	https://epa.gov	786-156-6489	1992	1986	57	1	1	First Trust Emerging Markets Local Currency Bond ETF	0	Casella Waste Systems, Inc.	3	0	48991022	1	2	\N
58	Dore Wigmore	dwigmore1l@microsoft.com	https://ft.com	http://icio.us	329-228-3329	2003	2007	58	1	1	TriplePoint Venture Growth BDC Corp.	1	Anworth Mortgage Asset  Corporation	3	1	39292997	1	2	\N
59	Minta Leaf	mleaf1m@mail.ru	https://issuu.com	https://dion.ne.jp	168-991-5173	1999	1992	59	1	1	LivePerson, Inc.	0	Mexico Equity and Income Fund, Inc. (The)	3	0	82922547	1	2	\N
60	Nerti Maclaine	nmaclaine1n@pcworld.com	http://wikimedia.org	https://fema.gov	399-727-1970	2010	1987	60	1	1	Education Realty Trust Inc.	1	Continental Resources, Inc.	3	0	72017915	1	1	\N
61	Lorenzo Verty	lverty1o@blogtalkradio.com	http://myspace.com	https://about.com	165-201-6024	2005	1985	61	1	1	Agilysys, Inc.	0	OFG Bancorp	2	1	48908671	1	3	\N
62	Arlan Keywood	akeywood1p@aboutads.info	https://amazon.co.jp	https://unc.edu	448-442-8468	2007	2010	62	1	1	KB Financial Group Inc	1	Mannatech, Incorporated	5	0	16610237	1	2	\N
63	Annadiana Dumelow	adumelow1q@usnews.com	https://arizona.edu	https://163.com	349-813-9844	2000	1995	63	1	1	Bioblast Pharma Ltd.	0	Bioblast Pharma Ltd.	5	0	85084503	1	3	\N
64	Zandra Laxson	zlaxson1r@spiegel.de	http://apache.org	http://ihg.com	313-938-4254	1968	1994	64	1	1	Broadcom Limited	0	Cadence Bancorporation	3	1	51949179	1	2	\N
65	Dorella Garley	dgarley1s@zdnet.com	http://opera.com	https://instagram.com	458-357-5832	1985	2005	65	1	1	Origo Acquisition Corporation	1	Fulgent Genetics, Inc.	3	0	47045725	1	1	\N
66	Gawain Bunting	gbunting1t@nytimes.com	http://intel.com	http://berkeley.edu	531-392-4239	1999	1998	66	1	1	Marriot Vacations Worldwide Corporation	1	Patheon N.V.	4	1	68793309	1	2	\N
67	Ilse Labbez	ilabbez1u@freewebs.com	http://amazon.co.uk	http://liveinternet.ru	162-167-1630	1993	1988	67	1	1	Cabot Oil & Gas Corporation	1	Frequency Electronics, Inc.	2	1	33024197	1	3	\N
68	Joice Skeel	jskeel1v@gov.uk	http://dedecms.com	https://163.com	128-351-7615	2004	2008	68	1	1	Cara Therapeutics, Inc.	1	Enanta Pharmaceuticals, Inc.	3	1	36162464	1	3	\N
69	Norris Ponte	nponte1w@indiatimes.com	https://netscape.com	http://bizjournals.com	756-511-8005	1993	2012	69	1	1	Spark Energy, Inc.	1	Gabelli Dividend	2	1	30664428	1	2	\N
70	Leslie Garside	lgarside1x@samsung.com	http://bluehost.com	http://bluehost.com	299-186-6972	1992	1993	70	1	1	Deckers Outdoor Corporation	0	Macy&#39;s Inc	2	0	84482869	1	2	\N
71	Kamillah Steel	ksteel1y@nba.com	http://delicious.com	https://canalblog.com	951-300-4451	2009	1994	71	1	1	Torchlight Energy Resources, Inc.	0	MFC Bancorp Ltd.	2	1	84594657	1	3	\N
72	Claiborne Cohen	ccohen1z@biglobe.ne.jp	http://phpbb.com	http://edublogs.org	450-525-2162	2003	2010	72	1	1	Medigus Ltd.	1	Liberty Tax, Inc.	3	1	60646850	1	1	\N
73	Emmeline Shemwell	eshemwell20@123-reg.co.uk	https://sun.com	http://networksolutions.com	272-462-1225	1995	2010	73	1	1	Red Hat, Inc.	0	Sophiris Bio, Inc.	4	0	39110378	1	3	\N
74	Niven Kiessel	nkiessel21@psu.edu	http://si.edu	https://printfriendly.com	539-510-1855	2009	2010	74	1	1	Internet Initiative Japan, Inc.	0	Osisko Gold Royalties Ltd	3	1	51095772	1	2	\N
75	Antonina Vonderdell	avonderdell22@mozilla.org	https://twitpic.com	http://de.vu	429-428-4454	1987	2001	75	1	1	Columbia Sportswear Company	1	Nuveen Select Tax Free Income Portfolio	1	0	50366156	1	3	\N
76	Putnam Balf	pbalf23@ebay.com	https://e-recht24.de	https://ow.ly	499-453-3540	2004	2008	76	1	1	The Carlyle Group L.P.	0	Azul S.A.	1	0	80429491	1	1	\N
77	Theodore Kelmere	tkelmere24@sakura.ne.jp	https://cam.ac.uk	http://mapy.cz	245-417-9330	2009	2010	77	1	1	Electro Scientific Industries, Inc.	1	Ares Commercial Real Estate Corporation	3	1	00776747	1	3	\N
78	Mellie Featenby	mfeatenby25@ameblo.jp	https://yandex.ru	https://dion.ne.jp	959-288-6251	1998	2009	78	1	1	OpGen, Inc.	1	KAR Auction Services, Inc	4	1	01349731	1	2	\N
79	Cacilia Shirt	cshirt26@a8.net	http://paginegialle.it	http://columbia.edu	435-636-5315	2012	2003	79	1	1	FIRST REPUBLIC BANK	1	Bed Bath & Beyond Inc.	3	1	15013055	1	3	\N
80	Cinnamon Pedden	cpedden27@addtoany.com	http://census.gov	http://dailymotion.com	470-787-7736	2002	2007	80	1	1	Blucora, Inc.	0	Firsthand Technology Value Fund, Inc.	4	1	21462946	1	2	\N
81	Mufinella Carlesi	mcarlesi28@nationalgeographic.com	https://ucoz.ru	https://mediafire.com	590-801-2354	2012	2000	81	1	1	Brink&#39;s Company (The)	1	First Trust Nasdaq Food & Beverage ETF	4	1	57252540	1	1	\N
82	Hermia Bryers	hbryers29@howstuffworks.com	http://unc.edu	http://skyrock.com	580-656-1388	2003	2012	82	1	1	Nordson Corporation	1	Kearny Financial	4	1	22327218	1	2	\N
83	Emeline McAdam	emcadam2a@t-online.de	https://wix.com	http://state.tx.us	408-760-2337	2004	2008	83	1	1	Global Indemnity Limited	0	Varonis Systems, Inc.	3	1	32788863	1	3	\N
84	Alleen Lehrer	alehrer2b@epa.gov	https://omniture.com	http://fda.gov	346-782-7230	1991	2003	84	1	1	Kennedy-Wilson Holdings Inc.	1	First Bancorp, Inc (ME)	5	0	75617950	1	3	\N
85	Aurelia Romke	aromke2c@joomla.org	https://github.io	http://printfriendly.com	426-330-6816	2010	1990	85	1	1	JD.com, Inc.	1	Huntington Bancshares Incorporated	1	0	08456950	1	3	\N
86	Pierre Landon	plandon2d@xrea.com	https://weather.com	http://netvibes.com	969-870-1665	1995	1988	86	1	1	Koppers Holdings Inc.	1	Southern Missouri Bancorp, Inc.	4	0	93829990	1	1	\N
87	Kristoffer Cowmeadow	kcowmeadow2e@xrea.com	http://msu.edu	https://ft.com	348-187-9946	1993	2002	87	1	1	Entercom Communications Corporation	1	Hanwha Q CELLS Co., Ltd. 	4	0	38415905	1	1	\N
88	Randa Rouf	rrouf2f@barnesandnoble.com	https://uol.com.br	http://oakley.com	821-651-9310	2010	2010	88	1	1	Raytheon Company	0	Jensyn Acquistion Corp.	3	0	82625684	1	3	\N
89	Erastus Huddleston	ehuddleston2g@howstuffworks.com	https://nyu.edu	https://odnoklassniki.ru	620-888-6079	2005	1992	89	1	1	Noodles & Company	1	Noodles & Company	3	0	70499639	1	1	\N
90	Dannie Dunkerley	ddunkerley2h@loc.gov	https://bravesites.com	https://linkedin.com	366-397-7844	1993	1993	90	1	1	ClearBridge American Energy MLP Fund Inc.	1	Senomyx, Inc.	2	0	39816424	1	1	\N
91	Lorelle Russel	lrussel2i@dot.gov	https://npr.org	https://soundcloud.com	572-758-9186	2005	1994	91	1	1	Bottomline Technologies, Inc.	0	Nuveen Global High Income Fund	4	0	51570384	1	1	\N
92	Paquito Swinfon	pswinfon2j@jalbum.net	https://mapy.cz	http://symantec.com	197-139-0722	1994	2006	92	1	1	Radware Ltd.	1	Coherent, Inc.	1	1	45053459	1	1	\N
93	Linet Whifen	lwhifen2k@live.com	https://lycos.com	http://delicious.com	182-599-8348	2005	1995	93	1	1	The Long-Term Care ETF	0	Tarena International, Inc.	5	0	62110625	1	2	\N
94	Theo Tidbury	ttidbury2l@goodreads.com	https://npr.org	https://answers.com	268-706-7278	1983	2011	94	1	1	Leaf Group Ltd.	0	Navient Corporation	4	0	83366227	1	2	\N
95	Maye Rankcom	mrankcom2m@yolasite.com	https://etsy.com	http://behance.net	652-470-5365	1971	2009	95	1	1	Energizer Holdings, Inc.	1	Coca Cola Femsa S.A.B. de C.V.	2	1	47612841	1	2	\N
96	Maximilien Greathead	mgreathead2n@wikipedia.org	https://sciencedaily.com	http://360.cn	293-561-0049	2005	2000	96	1	1	First Trust Strategic Income ETF	1	Global X Conscious Companies ETF	2	1	09384673	1	2	\N
97	Mal Borges	mborges2o@miitbeian.gov.cn	https://ca.gov	https://dion.ne.jp	286-390-0653	2007	1995	97	1	1	DSP Group, Inc.	0	Stewardship Financial Corp	4	0	10538137	1	1	\N
98	Dot O'Bruen	dobruen2p@indiatimes.com	http://ca.gov	http://dropbox.com	648-849-2961	2003	2000	98	1	1	SVB Financial Group	0	Weibo Corporation	3	0	68640447	1	3	\N
99	Peadar Frankowski	pfrankowski2q@imgur.com	https://army.mil	http://epa.gov	417-570-0844	2008	1995	99	1	1	HP Inc.	0	CHS Inc	4	0	98848316	1	1	\N
100	Renelle Furlong	rfurlong2r@spotify.com	http://patch.com	http://furl.net	794-523-7386	2012	1984	100	1	1	H&R Block, Inc.	0	Provident Bancorp, Inc.	5	0	40395840	1	1	\N
\.


--
-- TOC entry 2679 (class 2606 OID 16402)
-- Name: uea_aluno uea_aluno_pkey; Type: CONSTRAINT; Schema: public; Owner: ueasistemas
--

ALTER TABLE ONLY public.uea_aluno
    ADD CONSTRAINT uea_aluno_pkey PRIMARY KEY (aluno_id);


--
-- TOC entry 2681 (class 2606 OID 16418)
-- Name: uea_aluno aluno_uea_curso_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ueasistemas
--

ALTER TABLE ONLY public.uea_aluno
    ADD CONSTRAINT aluno_uea_curso_fkey FOREIGN KEY (aluno_uea_curso) REFERENCES public.uea_curso(curso_id);


--
-- TOC entry 2680 (class 2606 OID 16413)
-- Name: uea_aluno aluno_uea_unidade_fkey; Type: FK CONSTRAINT; Schema: public; Owner: ueasistemas
--

ALTER TABLE ONLY public.uea_aluno
    ADD CONSTRAINT aluno_uea_unidade_fkey FOREIGN KEY (aluno_uea_unidade) REFERENCES public.uea_unidade(unidade_id);


-- Completed on 2018-11-17 17:55:27

--
-- PostgreSQL database dump complete
--

