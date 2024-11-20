const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const gigs = [
    {
        id: 1,
        band_name: "Pantera",
        imageURL: "https://i.scdn.co/image/ab67616100005174e21999c0102c240bdf094d9b",
        description: "Pantera is a legendary American heavy metal band known for their aggressive, groove-driven sound. Active from the 1980s to early 2000s, they helped shape modern metal with crushing riffs, powerful vocals, and intense energy. The band featured Phil Anselmo on vocals, Dimebag Darrell on guitar, Rex Brown on bass, and Vinnie Paul on drums. If you like heavy, high-energy music with a lot of attitude, Pantera is a must-listen.",
        time: "2024-01-15T16:00:00Z",
        location: "Manchester arena, Manchester"
    },
    {
        id: 2,
        band_name: "Korn",
        imageURL: "https://i.scdn.co/image/ab6761610000e5eb29af2ffb6f4ddd6324f878bc",
        description: "Korn is an American band that helped pioneer the nu-metal genre in the late 1990s. Known for their heavy, raw sound blending metal, hip-hop, and alternative rock, they became famous for their emotional lyrics and unique mix of distorted guitar riffs, pounding drums, and intense vocals. The band's lineup includes Jonathan Davis on vocals, James 'Munky' Shaffer and Brian 'Head' Welch on guitars, Fieldy on bass, and Ray Luzier on drums. Korn's dark, rebellious music and themes of alienation made them one of the most influential bands in modern rock.",
        time: "2024-03-22T19:30:00Z",
        location: "Wembley Arena, London"
    },
    {
        id: 3,
        band_name: "Slipknot",
        imageURL: "https://i.scdn.co/image/ab67616d00001e0249de1b4acdde02e84c6023b7",
        description: "Slipknot is an American heavy metal band known for their chaotic, aggressive sound and intense live performances. Formed in 1995, they gained fame for their blend of metal, nu-metal, and extreme music, along with their signature look—wearing masks and jumpsuits. The band features nine members, including Corey Taylor (vocals), Jim Root and Mick Thomson (guitars), Shawn Crahan (percussion), and Joey Jordison (drums, until his passing). Their music is fast, heavy, and intense, often exploring themes of anger, chaos, and personal struggles. Slipknot is one of the most iconic and influential bands in modern metal.",
        time: "2024-05-09T14:45:00Z",
        location: "O2 Arena, London"
    },
    {
        id: 4,
        band_name: "Cradle of Filth",
        imageURL: "https://i.scdn.co/image/ab6761610000e5eb2c50d0efbcaedb6b050fa5e6",
        description: "Cradle of Filth is a British extreme metal band known for their dark, theatrical sound that blends elements of gothic, symphonic, and black metal. Formed in 1991, they became famous for their haunting melodies, atmospheric orchestration, and provocative lyrics, often drawing on horror, fantasy, and gothic literature. The band’s lineup includes Dani Filth as the distinctive, shrieking vocalist. Cradle of Filth’s music is often dramatic and complex, with a focus on storytelling and dark imagery, making them one of the most prominent bands in the black metal and gothic metal scenes",
        time: "2024-07-19T21:00:00Z",
        location: "Echo Arena, Liverpool"
    },
    {
        id: 5,
        band_name: "Type O negative",
        imageURL: "https://i.scdn.co/image/ab67616100005174843df562d1bad7f5163fd164",
        description: "Type O Negative was an American gothic metal band known for their blend of dark, brooding melodies and heavy, atmospheric sound. Formed in 1989, the band combined elements of doom metal, industrial, and gothic rock, often with a melancholic or sarcastic tone. The band was led by Peter Steele, whose deep, baritone voice became iconic, along with his darkly humorous lyrics. Their music explored themes of love, death, and despair. Albums like Bloody Kisses (1993) and October Rust (1996) made them cult favorites, known for their unique, haunting style and distinct, gothic image.",
        time: "2024-08-11T18:15:00Z",
        location: "Motorpoint Arena, Sheffield"
    },
    {
        id: 6,
        band_name: "Coal Chamber",
        imageURL: "https://i.scdn.co/image/b219960abc1728ec54d5d57b6b38c8283b7df5dd",
        description: "Coal Chamber is an American nu-metal band formed in 1993, known for their heavy, groove-driven sound that combined elements of metal, industrial, and alternative rock. With a dark, aggressive style, they gained attention for their deep riffs, catchy hooks, and the distinctive, raspy vocals of lead singer Dez Fafara. Their music often explored themes of alienation, anger, and personal struggles. Coal Chamber's self-titled debut album (1997) and follow-up Chamber Music (1999) earned them a strong fanbase within the late '90s and early 2000s metal scene before they disbanded in 2003.",
        time: "2024-09-25T12:30:00Z",
        location: "Bristol Arena, Bristol"
    },
    {
        id: 7,
        band_name: "Emilie Autumn",
        imageURL: "https://i.scdn.co/image/ab6772690000dd226bb22a7e3828ef02a89d752a",
        description: "Emilie Autumn is an American singer, songwriter, and musician known for her unique blend of classical music, industrial, and gothic rock. She often describes her style as 'victoriandustrial,' combining dark, theatrical elements with 18th and 19th-century influences. Emilie is recognized for her striking look, often featuring elaborate costumes and makeup, as well as her skills on the violin and piano. Her music is marked by dramatic, poetic lyrics that explore themes of mental health, empowerment, and personal struggles. Albums like Opheliac (2006) and Fight Like a Girl (2012) have garnered her a dedicated cult following in the gothic and alternative scenes.",
        time: "2024-10-03T09:00:00Z",
        location: "Utilita Arena, Newcastle"
    },
    {
        id: 8,
        band_name: "Abney Park",
        imageURL: "https://i.scdn.co/image/ab6761610000e5eb91ced14c589646ea578baa05",
        description: "Abney Park is an American steampunk band known for their eclectic mix of industrial, gothic, and electronic music, often infused with elements of folk and world music. Formed in 1997, the band is recognized for their distinctive 'steampunk' aesthetic, blending Victorian-era influences with futuristic, mechanical sounds. Their music explores themes of adventure, alternate histories, and fantastical worlds, often with a theatrical, narrative-driven style. Led by Robert Brown, Abney Park's sound is characterized by rich instrumentation, including accordions, synthesizers, and guitars. They've built a dedicated following within the steampunk community, becoming one of its most influential musical acts.",
        time: "2024-11-14T23:05:00Z",
        location: "Barclaycard Arena, Birmingham"
    },
    {
        id: 9,
        band_name: "Ed Alleyne Johnson",
        imageURL: "https://i.scdn.co/image/ab67616d0000b273c8d9c0c4cd54c0bb6449409f",
        description: "Ed Alleyne-Johnson is a British violinist and composer known for his unique blend of classical violin with modern genres like rock and electronic music. He gained recognition for his innovative use of electric violin, often creating intricate, melodic arrangements that combine both traditional and contemporary elements. His work spans a variety of styles, from classical and jazz to ambient and experimental. Ed is particularly known for his solo performances, where he uses looping techniques to build complex layers of sound live. His album Electric Violin (1998) helped establish his reputation as a pioneering artist in the world of electric violin music.",
        time: "2024-12-02T07:50:00Z",
        location: "Cambridge Corn Exchanhge, Cambridge"
    },
    {
        id: 10,
        band_name: "Rammstein",
        imageURL: "https://i.scdn.co/image/ab67616d0000b2732a53f66b3c72fa418d54cbaf",
        description: "Rammstein is a German industrial metal band known for their explosive live performances, heavy guitar riffs, and provocative lyrics. Formed in 1994, the band combines elements of metal, electronic, and theatrical performance, often incorporating pyrotechnics and elaborate stage setups. Their music is characterized by powerful, rhythm-driven sound and frontman Till Lindemann’s deep, growling vocals. Rammstein’s songs, sung primarily in German, tackle controversial topics with dark humor and political commentary. Albums like Sehnsucht (1997), Mutter (2001), and Zeit (2022) have earned them a global following, making them one of the most successful and influential metal bands of all time",
        time: "2024-12-26T16:20:00Z",
        location: "O2 Arena, London"
    }

];

app.get('/gigs', (req, res) => {
    res.json(gigs);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
