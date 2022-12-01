const app = require('express')();
const PORT = 8080;
const cors = require('cors');
app.use(cors())

app.listen(
    PORT, ()=>console.log(`Server running on http://localhost:${PORT}`)
)
const data = [
    { id:"1",
        title:"ROSETTE, ROHR Ø42,4 MM, RUND 60 MM, Q-LINE, MOD 0501, V2A",
        price:"4.55€",
        description:"für Geländerpfosten | Edelstahl V2A | für den Innenbereich 13050104212, für Ø42,4 mm Geländerpfosten, ehemalige Art. Nr. 13050104212",
        category:"Geländer",
        image:"https://shop.de.q-railing.com/product/image/medium/130501_%2300000001502c2bc8_1.jpg",
        cross:"Q-cleaner, 300 ml, Q-23, MOD 0601§§/product/image/medium/200601_0.jpg",
        stats:""},
    { id:"2",
        title:"BODEN-GLASKLEMME, EASY GLASS MOD 6400, V4A",
        price:"6.55€",
        description:"ohne Gummi-Einlagen | Boden-Glasklemme | für 15 - 21,52 mm starkes laminiertes/monolithisches Glas | Edelstahl V4A | für den Außenbereich 14640000010, 14640000012, hochglanzpoliert, ehemalige Art. Nr. 14640000010",
        category:"Glasklemme",
        image:"https://shop.de.q-railing.com/product/image/medium/146400_%2300000001502d5db4_1.jpg",
        cross:"Gummi-Einlage für Bodenglasklemme Easy Glass MOD 6400§§/product/image/medium/205064_%2300000001502d73a9_1.jpg",
        stats:"Winkel§§120deg§-§VPE§§14 Stk.§-§Modell§§6508"},
    { id:"3",
        title:"GELÄNDERPFOSTEN, Ø42,.4 X 2 MM, H=1150 MM, MOD 0545, V2A",
        price:"14.95€",
        description:"Höhe 1150 mm | für Treppenmontage | Edelstahl V2A | für den Innenbereich 13056424212,Höhe 1150 mm | für Treppenmontage | Edelstahl V2A | für den Innenbereich 13056424212",
        category:"Halterung",
        image:"https://shop.de.q-railing.com/product/image/medium/130545_0.jpg",
        cross:"Bodenflansch für Rohr, Treppenmontage, Q-line, MOD 0947, V2A§§https://shop.de.q-railing.com/product/image/medium/130947_%2300000001502d58ac_1.jpg",
        stats:"Winkel§§90deg§-§VPE§§2 Stk.§-§Modell§§6508"},
    { id:"4",
        title:"90°-WANDFLANSCH, FÜR GLASLEISTENROHR, MOD 6508, V4A",
        price:"9.65€",
        description:"für französische Balkone | Edelstahl V4A | für den Außenbereich 14650704012, 14650765412, 14650804012, 14650865412, für 40 x 40 mm Glasleistenrohr, links, ehemalige Art. Nr. 14650704012",
        category:"französische Balkone",
        image:"https://shop.de.q-railing.com/product/image/medium/146400_%2300000001502d5db4_1.jpg",
        cross:"Wandflansch für Glasleistenrohr, Easy Glass, MOD 6545, V4A§§https://shop.de.q-railing.com/product/image/medium/146545_%2300000001502d5c3d_1.jpg",
        stats:"Winkel§§90deg§-§VPE§§2 Stk.§-§Modell§§6508"},
    { id:"5",
        title:"GLASKLEMME, MOD 2200, OHNE GUMMIEINLAGE",
        price:"12.55€",
        description:"Rohr Ø42,4 mm, Zinkdruckguss, Edelstahleffekt (10220004219)",
        category:"Glasklemme",
        image:"https://shop.de.q-railing.com/product/image/small/102200_%2300000001502c2bfe_1.jpg",
        cross:"Gummi-Einlage für Bodenglasklemme Easy Glass MOD 6400§§/product/image/medium/205064_%2300000001502d73a9_1.jpg",
        stats:"Tiefe§§30mm§-§Höhe§§45mm"},
    { id:"6",
        title:"WERKZEUG FÜR DIE JUSTIERUNG VON Q-DISC; 201009",
        price:"22.95€",
        description:"Q-83 (19692000200)",
        category:"Glasklemme",
        image:"https://shop.de.q-railing.com/product/image/medium/201009_1.jpg",
        cross:"",
        stats:"Tiefe§§30mm§-§VPE§§2 Stk"},
    { id:"7",
        title:"ADAPTER FÜR GLASKLEMME MOD 4400/4600, MOD 0723 ZINKDRUCKGUSS",
        price:"4.95€",
        description:"zur Geländerpfosten-Montage | für den Innen- und Außenbereich 10072300020, 10072304220",
        category:"Glasklemme",
        image:"https://shop.de.q-railing.com/product/image/medium/100723_%2300000001502c2bd3_1.jpg",
        cross:"",
        stats:"Tiefe§§30mm§-§Höhe§§14mm"},
]

const engbestseller = [
    { id:"20",
    title:"134913 eng",
    image:"https://www.q-railing.com/files/thumbnails/134913.180x180.jpg",
    link: "https://google.de"
},
    { id:"21",
    title:"168210 eng",
    image:"https://www.q-railing.com/files/thumbnails/168210.180x180.jpg",
    link: "https://google.de"
},
    { id:"22",
    title:"132500 eng",
    image:"https://www.q-railing.com/files/thumbnails/132500-1.180x180.jpg",
    link: "https://google.de"
},
    { id:"23",
    title:"130749 eng",
    image:"https://www.q-railing.com/files/thumbnails/130749.180x180.jpg",
    link: "https://google.de"
},
    { id:"24",
    title:"146924 eng",
    image:"https://www.q-railing.com/files/thumbnails/146924-1.180x180.jpg",
    link: "https://google.de"
},
    { id:"25",
    title:"146200 eng",
    image:"https://www.q-railing.com/files/thumbnails/146200.180x180.jpg",
    link: "https://google.de"
},
]


const gerbestseller = [
    { id:"20",
    title:"134913",
    image:"https://www.q-railing.com/files/thumbnails/134913.180x180.jpg",
    link: "https://google.de"
},
    { id:"21",
    title:"168210",
    image:"https://www.q-railing.com/files/thumbnails/168210.180x180.jpg",
    link: "https://google.de"
},
    { id:"22",
    title:"132500",
    image:"https://www.q-railing.com/files/thumbnails/132500-1.180x180.jpg",
    link: "https://google.de"
},
    { id:"23",
    title:"130749",
    image:"https://www.q-railing.com/files/thumbnails/130749.180x180.jpg",
    link: "https://google.de"
},
    { id:"24",
    title:"146924",
    image:"https://www.q-railing.com/files/thumbnails/146924-1.180x180.jpg",
    link: "https://google.de"
},
    { id:"25",
    title:"146200",
    image:"https://www.q-railing.com/files/thumbnails/146200.180x180.jpg",
    link: "https://google.de"
},
]




app.get("/products", (req, res)=>{

    res.status(200).send(data)
})

app.get("/products/:id", (req, res)=>{
    const { id } = req.params;
    
    const found = data.filter(data=>data.id == id)
    console.log(found)
    res.status(200).send(found)


})
app.get("/login/:id", (req, res)=>{
    const { id } = req.params;
    
    if(id == "rene"){
    res.status(200).send([{id:"1337", role: "user", address :"kleve - Kellen testsry 22"}])}
    if(id != "rene"){
    res.status(200).send([{msg:"error:failed"}])
    }

})



app.get("/text/maintext/ger", (req, res)=>{

    res.status(200).send(["IHR SPEZIALIST FÜR HOCHWERTIGE GELÄNDER","Die Geländersysteme von Q-railing zeichnen sich durch raffiniertes Design, höchste Qualität, schnelle Montage und maximale Sicherheit aus.Entdecken Sie unser umfangreiches Sortiment an zertifizierten Glasgeländern, Edelstahlgeländern, Treppengeländern, Handläufen, Glasadaptern und Glasklemmen sowie viele weitere innovative Geländerlösungen.", "Dank des modularen Aufbaus unserer Systeme können Sie die Komponenten nahezu beliebig miteinander kombinieren. Erwecken Sie Ihre Vision zum Leben und kreieren Sie Ihr ganz persönliches Geländer."])


})

app.get("/text/maintext/eng", (req, res)=>{

    res.status(200).send(["THE NUMBER 1 FOR PREMIUM BALUSTRADES","Sophisticated design, unbeatable quality, rapid assembly and excellent safety - that is what Q-railing stands for. So, take the time to discover our wide range of certified glass balustrades, baluster railings, handrails, glass adapters and glass clamps, as well as our many other innovative solutions for top-quality balustrades.", "Q-railing's system are renowned for their flexibility. Thanks to their modular design, you can mix and match components in any way you wish, creating truly unique balustrades. That is how, together, we bring your vision to life."])


})


app.get("/text/bestseller/eng", (req, res)=>{

    res.status(200).send(engbestseller)


})

app.get("/text/bestseller/ger", (req, res)=>{

    res.status(200).send(gerbestseller)


})