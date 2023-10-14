$(document).ready(function() {
    var data = ["Baringo",
        "Bomet",
        "Bungoma",
        "Busia",
        "Elgeyo Marakwet",
        "Embu",
        "Garissa",
        "Homa Bay",
        "Isiolo",
        "Kajiado",
        "Kakamega",
        "Kericho",
        "Kiambu",
        "Kilifi",
        "Kirinyaga",
        "Kisii",
        "Kisumu",
        "Kitui",
        "Kwale",
        "Laikipia",
        "Lamu",
        "Machakos",
        "Makueni",
        "Mandera",
        "Meru",
        "Migori",
        "Marsabit",
        "Mombasa",
        "Murang\'a",
        "Nairobi",
        "Nakuru",
        "Nandi",
        "Narok",
        "Nyamira",
        "Nyandarua",
        "Nyeri",
        "Samburu",
        "Siaya",
        "Taita Taveta",
        "Tana River",
        "Tharaka Nithi",
        "Trans Nzoia",
        "Turkana",
        "Uasin Gishu",
        "Vihiga",
        "Wajir",
        "West Pokot"
    ];
    for (var index = 0; index < data.length; index++) {
        $('#county').append('<option value="' + data[index] + '">' + data[index] + '</option>');
    }
});


$("#county").change(function() {
    document.getElementById("constituency").options.length = 0;
    document.getElementById("ward").options.length = 0;
    $('#constituency').append('<option value="' + "" + '">' + 'select constituency' + '</option>');
    $('#ward').append('<option value="' + "" + '">' + 'select ward' + '</option>');
    var data = []
    console.log($("#county").find(":selected").val());
    if ($("#county").find(":selected").val() != "") {
        document.getElementById("constituency").hidden = false;
        var county = $("#county").find(":selected").val();

        if (county == 'Mombasa') {
            data = ['Changamwe', 'Jomvu', 'Kisauni', 'Likoni', 'Mvita', 'Nyali']
        } else if (county == 'Marsabit') {
            data = ['Moyale', 'North Horr', 'Saku', 'Laisamis']
        } else if (county == 'Isiolo') {
            data = ['Isiolo North', 'Isiolo South']
        } else if (county == 'Meru') {
            data = ['Igembe South', 'Igembe Central', 'Igembe North', 'Tigania West', 'Tigania East', 'North Imenti', 'Buuri', 'Central Imenti', 'South Imenti']
        } else if (county == 'Tharaka Nithi') {
            data = ['Maara', " Chuka/Igambang'ombe ", 'Tharaka']
        } else if (county == 'Embu') {
            data = ['Manyatta', 'Runyenjes', 'Mbeere South', 'Mbeere North']
        } else if (county == 'Kitui') {
            data = ['Mwingi North', 'Mwingi West', 'Mwingi Central', 'Kitui West', 'Kitui Rural', 'Kitui Central', 'Kitui East', 'Kitui South']
        } else if (county == 'Machakos') {
            data = ['Masinga', 'Yatta', 'Kangundo', 'Matungulu', 'Kathiani', 'Mavoko', 'Machakos Town', 'Mwala']
        } else if (county == 'Makueni') {
            data = ['Mbooni', 'Kilome', 'Kaiti', 'Makueni', 'Kibwezi West', 'Kibwezi East']
        } else if (county == 'Nyandarua') {
            data = ['Kinangop', 'Kipipiri', 'Ol Kalou', 'Ol Jorok', 'Ndaragwa']
        } else if (county == 'Nyeri') {
            data = ['Tetu', 'Kieni', 'Mathira', 'Othaya', 'Mukurweini', 'Nyeri Town']
        } else if (county == 'Kwale') {
            data = ['Msambweni', 'Lungalunga', 'Matuga', 'Kinango']
        } else if (county == 'Kirinyaga') {
            data = ['Mwea', 'Gichugu', 'Ndia', 'Kirinyaga Central']
        } else if (county == 'Murang\'a') {
            data = ['Kangema', 'Mathioya', 'Kiharu', 'Kigumo', 'Maragwa', 'Kandara', 'Gatanga']
        } else if (county == 'Kiambu') {
            data = ['Gatundu South', 'Gatundu North', 'Juja', 'Thika Town', 'Ruiru', 'Githunguri', 'Kiambu', 'Kiambaa', 'Kabete', 'Kikuyu', 'Limuru', 'Lari']
        } else if (county == 'Turkana') {
            data = ['Turkana North', 'Turkana West', 'Turkana Central', 'Loima', 'Turkana South', 'Turkana East']
        } else if (county == 'West Pokot') {
            data = ['Kapenguria', 'Sigor', 'Kacheliba', 'Pokot South']
        } else if (county == 'Samburu') {
            data = ['Samburu West', 'Samburu North', 'Samburu East']
        } else if (county == 'Trans Nzoia') {
            data = ['Kwanza', 'Endebess', 'Saboti', 'Kiminini', 'Cherangany']
        } else if (county == 'Uasin Gishu') {
            data = ['Soy', 'Turbo', 'Moiben', 'Ainabkoi', 'Kapseret', 'Kesses']
        } else if (county == 'Elgeyo Marakwet') {
            data = ['Marakwet East', 'Marakwet West', 'Keiyo North', 'Keiyo South']
        } else if (county == 'Nandi') {
            data = ['Tinderet', 'Aldai', 'Nandi Hills', 'Chesumei', 'Emgwen', 'Mosop']
        } else if (county == 'Kilifi') {
            data = ['Kilifi North', 'Kilifi South', 'Kaloleni', 'Rabai', 'Ganze', 'Malindi', 'Magarini']
        } else if (county == 'Baringo') {
            data = ['Tiaty', 'Baringo', 'Baringo Central', 'Baringo South', 'Mogotio', 'Eldama Ravine']
        } else if (county == 'Laikipia') {
            data = ['Laikipia West', 'Laikipia East', 'Laikipia North']
        } else if (county == 'Nakuru') {
            data = ['Molo', 'Njoro', 'Naivasha', 'Gilgil', 'Kuresoi South', 'Kuresoi North', 'Subukia', 'Rongai', 'Bahati', 'Nakuru Town West', 'Nakuru Town East']
        } else if (county == 'Narok') {
            data = ['Kilgoris', 'Emurua Dikirr', 'Narok North', 'Narok East', 'Narok South', 'Narok West']
        } else if (county == 'Kajiado') {
            data = ['Kajiado North', 'Kajiado Central', 'Kajiado East', 'Kajiado West', 'Kajiado South']
        } else if (county == 'Kericho') {
            data = ['Kipkelion East', 'Kipkelion West', 'Ainamoi', 'Bureti', 'Belgut', 'Sigowet/Soin']
        } else if (county == 'Bomet') {
            data = ['Sotik', 'Chepalungu', 'Bomet East', 'Bomet Central', 'Konoin']
        } else if (county == 'Kakamega') {
            data = ['Lugari', 'Likuyani', 'Malava', 'Lurambi', 'Navakholo', 'Mumias West', 'Mumias East', 'Matungu', 'Butere', 'Khwisero', 'Shinyalu', 'Ikolomani']
        } else if (county == 'Vihiga') {
            data = ['Vihiga', 'Sabatia', 'Hamisi', 'Luanda', 'Emuhaya']
        } else if (county == 'Bungoma') {
            data = ['Mt. Elgon', 'Sirisia', 'Kabuchai', 'Bumula', 'Kanduyi', 'Webuye East', 'Webuye West', 'Kimilili', 'Tongaren']
        } else if (county == 'Tana River') {
            data = ['Garsen', 'Galole', 'Bura']
        } else if (county == 'Busia') {
            data = ['Teso North', 'Teso South', 'Nambale', 'Matayos', 'Butula', 'Funyula', 'Budalangi']
        } else if (county == 'Siaya') {
            data = ['Ugenya', 'Ugunja', 'Alego Usonga', 'Gem', 'Bondo', 'Rarieda']
        } else if (county == 'Kisumu') {
            data = ['Kisumu East', 'Kisumu West', 'Kisumu Central', 'Seme', 'Nyando', 'Muhoroni', 'Nyakach']
        } else if (county == 'Homa Bay') {
            data = ['Kasipul', 'Kabondo Kasipul', 'Karachuonyo', 'Rangwe', 'Homa Bay Town', 'Ndhiwa', 'Suba North', 'Suba South']
        } else if (county == 'Migori') {
            data = ['Rongo', 'Awendo', 'Suna East', 'Suna West', 'Uriri', 'Nyatike', 'Kuria West', 'Kuria East']
        } else if (county == 'Kisii') {
            data = ['Bonchari', 'South Mugirango', 'Bomachoge Borabu', 'Bobasi', 'Bomachoge Chache', 'Nyaribari Masaba', 'Nyaribari Chache', 'Kitutu Chache North', 'Kitutu Chache South']
        } else if (county == 'Nyamira') {
            data = ['Kitutu Masaba', 'West Mugirango', 'North Mugirango', 'Borabu']
        } else if (county == 'Nairobi City') {
            data = ['Westlands', 'Dagoretti North', 'Dagoretti South', 'Langata', 'Kibra', 'Roysambu', 'Kasarani', 'Ruaraka', 'Embakasi South', 'Embakasi North', 'Embakasi Central', 'Embakasi East', 'Embakasi West', 'Makadara', 'Kamukunji', 'Starehe', 'Mathare']
        } else if (county == 'Lamu') {
            data = ['Lamu East', 'Lamu West']
        } else if (county == 'Taita Taveta') {
            data = ['Taveta', 'Wundanyi', 'Mwatate', 'Voi']
        } else if (county == 'Garissa') {
            data = ['Garissa Township', 'Balambala', 'Lagdera', 'Dadaab', 'Fafi', 'Ijara']
        } else if (county == 'Wajir') {
            data = ['Wajir North', 'Wajir East', 'Tarbaj', 'Wajir West', 'Eldas', 'Wajir South']
        } else if (county == 'Mandera') {
            data = ['Mandera West', 'Banissa', 'Mandera North', 'Mandera South', 'Mandera East', 'Lafey']
        }
        for (var index = 0; index < data.length; index++) {
            $('#constituency').append('<option value="' + data[index] + '">' + data[index] + '</option>');
        }
    } else {
        document.getElementById("constituency").hidden = true;
    }
});

$("#constituency").change(function() {
    document.getElementById("ward").options.length = 0;
    $('#ward').append('<option value="' + "" + '">' + 'select ward' + '</option>');
    var data = []
    if ($("#constituency").find(":selected").val() != "") {
        document.getElementById("ward").hidden = false;
        var constituency = $("#constituency").find(":selected").val();

        if (constituency == 'Likoni') {
            data = ['Mtongwe', 'Shika Adabu', 'Bofu', 'Likoni', 'Timbwani']
        } else if (constituency == 'Mvita') {
            data = ['Mji Wa Kale/Makadara', 'Tudor', 'Tononoka', 'Shimanzi/Ganjoni', 'Majengo']
        } else if (constituency == 'Changamwe') {
            data = ['Port Reitz', 'Kipevu', 'Airport', 'Changamwe', 'Chaani']
        } else if (constituency == 'Jomvu') {
            data = ['Jomvu Kuu', 'Miritini', 'Mikindani']
        } else if (constituency == 'Kisauni') {
            data = ['Mjambere', 'Junda', 'Bamburi', 'Mwakirunge', 'Mtopanga', 'Magogoni', 'Shanzu']
        } else if (constituency == 'Nyali') {
            data = ['Frere Town', 'Ziwa la Ng\'ombe', 'Mkomani', 'Kongowea', 'Kadzandani']
        } else if (constituency == 'Moyale') {
            data = ['Butiye', 'Sololo', 'Heillu/Manyatta', 'Golbo', 'Moyale Township', 'Uran', 'Obbu']
        } else if (constituency == 'North Horr') {
            data = ['Dukana', 'Maikona', 'Turbi', 'North Horr', 'Illeret']
        } else if (constituency == 'Saku') {
            data = ['Sagante/Jaldesa', 'Karare', 'Marsabit Central']
        } else if (constituency == 'Laisamis') {
            data = ['Loiyangalani', 'Kargi/South Horr', 'Korr/Ngurunit', 'Logo Logo', 'Laisamis']
        } else if (constituency == 'Isiolo North') {
            data = ['Wabera', 'Bulla Pesa', 'Chari', 'Cherab', 'Ngare Mara', 'Burat', 'Oldo/Nyiro']
        } else if (constituency == 'Isiolo South') {
            data = ['Garbatulla', 'Kinna', 'Sericho']
        } else if (constituency == 'Igembe South') {
            data = ['Maua', 'Kiegoi/Antubochiu', 'Athiru Gaiti', 'Akachiu', 'Kanuni']
        } else if (constituency == 'Igembe Central') {
            data = [" Akirang'ondu ", 'Athiru Ruujine', 'Igembe East', 'Njia', 'Kangeta']
        } else if (constituency == 'Igembe North') {
            data = ['Antuambui', 'Ntunene', 'Antubetwe Kiongo', 'Naathu', 'Amwathi']
        } else if (constituency == 'Tigania West') {
            data = ['Athwana', 'Akithii', 'Kianjai', 'Nkomo', 'Mbeu']
        } else if (constituency == 'Tigania East') {
            data = ['Thangatha', 'Mikinduri', 'Kiguchwa', 'Muthara', 'Karama']
        } else if (constituency == 'North Imenti') {
            data = ['Municipality', 'Ntima East', 'Ntima West', 'Nyaki West', 'Nyaki East']
        } else if (constituency == 'Buuri') {
            data = ['Timau', 'Kisima', 'Kiirua/Naari', 'Ruiri/Rwarera', 'Kibirichia']
        } else if (constituency == 'Central Imenti') {
            data = ['Mwanganthia', 'Abothuguchi Central', 'Abothuguchi West', 'Kiagu']
        } else if (constituency == 'South Imenti') {
            data = ['Mitunguu', 'Igoji East', 'Igoji West', 'Abogeta East', 'Abogeta West', 'Nkuene']
        } else if (constituency == 'Maara') {
            data = ['Mitheru', 'Muthambi', 'Mwimbi', 'Ganga', 'Chogoria']
        } else if (constituency == 'Chuka/Igambang\'ombe') {
            data = ['Mariani', 'Karingani', 'Magumoni', 'Mugwe', " Igambang'ombe "]
        } else if (constituency == 'Tharaka') {
            data = ['Gatunga', 'Mukothima', 'Nkondi', 'Chiakariga', 'Marimanti']
        } else if (constituency == 'Manyatta') {
            data = ['Ruguru/Ngandori', 'Kithimu', 'Nginda', 'Mbeti North', 'Kirimari', 'Gaturi South']
        } else if (constituency == 'Runyenjes') {
            data = ['Gaturi North', 'Kagaari South', 'Central Ward', 'Kagaari North', 'Kyeni North', 'Kyeni South']
        } else if (constituency == 'Mbeere South') {
            data = ['Mwea', 'Makima', 'Mbeti South', 'Mavuria', 'Kiambere']
        } else if (constituency == 'Mbeere North') {
            data = ['Nthawa', 'Muminji', 'Evurore']
        } else if (constituency == 'Mwingi North') {
            data = ['Ngomeni', 'Kyuso', 'Mumoni', 'Tseikuru', 'Tharaka']
        } else if (constituency == 'Mwingi West') {
            data = ['Kyome/Thaana', 'Nguutani', 'Migwani', 'Kiomo/Kyethani']
        } else if (constituency == 'Mwingi Central') {
            data = ['Central', 'Kivou', 'Nguni', 'Nuu', 'Mui', 'Waita']
        } else if (constituency == 'Kitui West') {
            data = ['Mutonguni', 'Kauwi', 'Matinyani', 'Kwa Mutonga/Kithumula']
        } else if (constituency == 'Kitui Rural') {
            data = ['Kisasi', 'Mbitini', 'Kwavonza/Yatta', 'Kanyangi']
        } else if (constituency == 'Kitui Central') {
            data = ['Miambani', 'Township', 'Kyangwithya West', 'Mulango', 'Kyangwithya East']
        } else if (constituency == 'Kitui East') {
            data = ['Zombe/Mwitika', 'Nzambani', 'Chuluni', 'Voo/Kyamatu', 'Endau/Malalani', 'Mutito/Kaliku']
        } else if (constituency == 'Kitui South') {
            data = ['Ikanga/Kyatune', 'Mutomo', 'Mutha', 'Ikutha', 'Kanziko', 'Athi']
        } else if (constituency == 'Masinga') {
            data = ['Kivaa', 'Masinga Central', 'Ekalakala', 'Muthesya', 'Ndithini']
        } else if (constituency == 'Yatta') {
            data = ['Ndalani', 'Matuu', 'Kithimani', 'Ikombe', 'Katangi']
        } else if (constituency == 'Kangundo') {
            data = ['Kangundo North', 'Kangundo Central', 'Kangundo East', 'Kangundo West']
        } else if (constituency == 'Matungulu') {
            data = ['Tala', 'Matungulu North', 'Matungulu East', 'Matungulu West', 'Kyeleni']
        } else if (constituency == 'Kathiani') {
            data = ['Mitaboni', 'Kathiani Central', 'Upper Kaewa/Iveti', 'Lower Kaewa/Kaani']
        } else if (constituency == 'Mavoko') {
            data = ['Athi River', 'Kinanie', 'Muthwani', 'Syokimau/Mulolongo']
        } else if (constituency == 'Machakos Town') {
            data = ['Kalama', 'Mua', 'Mutituni', 'Machakos Central', 'Mumbuni North', 'Muvuti/Kiima-Kimwe', 'Kola']
        } else if (constituency == 'Mwala') {
            data = ['Mbiuni', 'Makutano/ Mwala', 'Masii', 'Muthetheni', 'Wamunyu', 'Kibauni']
        } else if (constituency == 'Mbooni') {
            data = ['Tulimani', 'Mbooni', 'Kithungo/Kitundu', 'Kiteta/Kisau', 'Waia-Kako', 'Kalawa']
        } else if (constituency == 'Kilome') {
            data = ['Kasikeu', 'Mukaa', 'Kiima Kiu/Kalanzoni']
        } else if (constituency == 'Kaiti') {
            data = ['Ukia', 'Kee', 'Kilungu', 'Ilima']
        } else if (constituency == 'Makueni') {
            data = ['Wote', 'Muvau/Kikuumini', 'Mavindini', 'Kitise/Kithuki', 'Kathonzweni', 'Nzaui/Kilili/Kalamba', 'Mbitini']
        } else if (constituency == 'Kibwezi West') {
            data = ['Makindu', 'Nguumo', 'Kikumbulyu North', 'Kikumbulyu South', 'Nguu/Masumba', 'Emali/Mulala']
        } else if (constituency == 'Kibwezi East') {
            data = ['Masongaleni', 'Mtito Andei', 'Thange', 'Ivingoni/Nzambani']
        } else if (constituency == 'Kinangop') {
            data = ['Engineer', 'Gathara', 'North Kinangop', 'Murungaru', 'Njabini\\Kiburu', 'Nyakio', 'Githabai', 'Magumu']
        } else if (constituency == 'Kipipiri') {
            data = ['Wanjohi', 'Kipipiri', 'Geta', 'Githioro']
        } else if (constituency == 'Ol Kalou') {
            data = ['Karau', 'Kanjuiri Range', 'Mirangine', 'Kaimbaga', 'Rurii']
        } else if (constituency == 'Ol Jorok') {
            data = ['Gatimu', 'Weru', 'Charagita']
        } else if (constituency == 'Ndaragwa') {
            data = ['Leshau/Pondo', 'Kiriita', 'Central', 'Shamata']
        } else if (constituency == 'Tetu') {
            data = ['Dedan Kimanthi', 'Wamagana', 'Aguthi-Gaaki']
        } else if (constituency == 'Kieni') {
            data = ['Mweiga', 'Naromoru Kiamathaga', 'Mwiyogo/Endarasha', 'Mugunda', 'Gatarakwa', 'Thegu River', 'Kabaru', 'Gakawa']
        } else if (constituency == 'Mathira') {
            data = ['Ruguru', 'Magutu', 'Iriaini', 'Konyu', 'Kirimukuyu', 'Karatina Town']
        } else if (constituency == 'Othaya') {
            data = ['Mahiga', 'Iria-Ini', 'Chinga', 'Karima']
        } else if (constituency == 'Mukurweini') {
            data = ['Gikondi', 'Rugi', 'Mukurwe-Ini West', 'Mukurwe-Ini Central']
        } else if (constituency == 'Nyeri Town') {
            data = ['Kiganjo/Mathari', 'Rware', 'Gatitu/Muruguru', " Ruring'u ", 'Kamakwa/Mukaro']
        } else if (constituency == 'Msambweni') {
            data = ['Gombato Bongwe', 'Ukunda', 'Kinondo', 'Ramisi']
        } else if (constituency == 'Lungalunga') {
            data = ['Pongwe/Kikoneni', 'Dzombo', 'Mwereni', 'Vanga']
        } else if (constituency == 'Matuga') {
            data = ['Tsimba Golini', 'Waa', 'Tiwi', 'Kubo South', 'Mkongani']
        } else if (constituency == 'Kinango') {
            data = ['Ndavaya', 'Puma', 'Kinango', 'Mackinnon Road', 'Chengoni/Samburu', 'Mwavumbo', 'Kasemeni']
        } else if (constituency == 'Mwea') {
            data = ['Mutithi', 'Kangai', 'Thiba', 'Wamumu', 'Nyangati', 'Murinduko', 'Gathigiriri', 'Tebere']
        } else if (constituency == 'Gichugu') {
            data = ['Kabare', 'Baragwi', 'Njukiini', 'Ngariama', 'Karumandi']
        } else if (constituency == 'Ndia') {
            data = ['Mukure', 'Kiine', 'Kariti']
        } else if (constituency == 'Kirinyaga Central') {
            data = ['Mutira', 'Kanyekini', 'Kerugoya', 'Inoi']
        } else if (constituency == 'Kangema') {
            data = ['Kanyenya-Ini', 'Muguru', 'Rwathia']
        } else if (constituency == 'Mathioya') {
            data = ['Gitugi', 'Kiru', 'Kamacharia']
        } else if (constituency == 'Kiharu') {
            data = ['Wangu', 'Mugoiri', 'Mbiri', 'Township', 'Murarandia', 'Gaturi']
        } else if (constituency == 'Kigumo') {
            data = ['Kahumbu', 'Muthithi', 'Kigumo', 'Kangari', 'Kinyona']
        } else if (constituency == 'Maragwa') {
            data = ['Kimorori/Wempa', 'Makuyu', 'Kambiti', 'Kamahuha', 'Ichagaki', 'Nginda']
        } else if (constituency == 'Kandara') {
            data = [" Ng'araria ", 'Muruka', 'Kagundu-Ini', 'Gaichanjiru', 'Ithiru', 'Ruchu']
        } else if (constituency == 'Gatanga') {
            data = ['Ithanga', 'Kakuzi/Mitubiri', 'Mugumo-Ini', 'Kihumbu-Ini', 'Gatanga', 'Kariara']
        } else if (constituency == 'Gatundu South') {
            data = ['Kiamwangi', 'Kiganjo', 'Ndarugu', 'Ngenda']
        } else if (constituency == 'Gatundu North') {
            data = ['Gituamba', 'Githobokoni', 'Chania', " Mang'u "]
        } else if (constituency == 'Juja') {
            data = ['Murera', 'Theta', 'Juja', 'Witeithie', 'Kalimoni']
        } else if (constituency == 'Thika Town') {
            data = ['Township', 'Kamenu', 'Hospital', 'Gatuanyaga', 'Ngoliba']
        } else if (constituency == 'Ruiru') {
            data = ['Gitothua', 'Biashara', 'Gatongora', 'Kahawa Sukari', 'Kahawa Wendani', 'Kiuu', 'Mwiki', 'Mwihoko']
        } else if (constituency == 'Githunguri') {
            data = ['Githunguri', 'Githiga', 'Ikinu', 'Ngewa', 'Komothai']
        } else if (constituency == 'Kiambu') {
            data = [" Ting'ang'a ", 'Ndumberi', 'Riabai', 'Township']
        } else if (constituency == 'Kiambaa') {
            data = ['Cianda', 'Karuri', 'Ndenderu', 'Muchatha', 'Kihara']
        } else if (constituency == 'Kabete') {
            data = ['Gitaru', 'Muguga', 'Nyadhuna', 'Kabete', 'Uthiru']
        } else if (constituency == 'Kikuyu') {
            data = ['Karai', 'Nachu', 'Sigona', 'Kikuyu', 'Kinoo']
        } else if (constituency == 'Limuru') {
            data = ['Bibirioni', 'Limuru Central', 'Ndeiya', 'Limuru East', 'Ngecha Tigoni']
        } else if (constituency == 'Lari') {
            data = ['Kinale', 'Kijabe', 'Nyanduma', 'Kamburu', 'Lari/Kirenga']
        } else if (constituency == 'Turkana North') {
            data = ['Kaeris', 'Lake Zone', 'Lapur', 'Kaaleng/Kaikor', 'Kibish', 'Nakalale']
        } else if (constituency == 'Turkana West') {
            data = ['Kakuma', 'Lopur', 'Letea', 'Songot', 'Kalobeyei', 'Lokichoggio', 'Nanaam']
        } else if (constituency == 'Turkana Central') {
            data = ['Kerio Delta', " Kang'atotha ", 'Kalokol', 'Lodwar Township', 'Kanamkemer']
        } else if (constituency == 'Loima') {
            data = ['Kotaruk/Lobei', 'Turkwel', 'Loima', 'Lokiriama/Lorengippi']
        } else if (constituency == 'Turkana South') {
            data = ['Kaputir', 'Katilu', 'Lobokat', 'Kalapata', 'Lokichar']
        } else if (constituency == 'Turkana East') {
            data = ['Kapedo/Napeitom', 'Katilia', 'Lokori/Kochodin']
        } else if (constituency == 'Kapenguria') {
            data = ['Riwo', 'Kapenguria', 'Mnagei', 'Siyoi', 'Endugh', 'Sook']
        } else if (constituency == 'Sigor') {
            data = ['Sekerr', 'Masool', 'Lomut', 'Weiwei']
        } else if (constituency == 'Kacheliba') {
            data = ['Suam', 'Kodich', 'Kasei', 'Kapchok', 'Kiwawa', 'Alale']
        } else if (constituency == 'Pokot South') {
            data = ['Chepareria', 'Batei', 'Lelan', 'Tapach']
        } else if (constituency == 'Samburu West') {
            data = ['Lodokejek', 'Suguta Marmar', 'Maralal', 'Loosuk', 'Poro']
        } else if (constituency == 'Samburu North') {
            data = ['El-Barta', 'Nachola', 'Ndoto', 'Nyiro', 'Angata Nanyokie', 'Baawa']
        } else if (constituency == 'Samburu East') {
            data = ['Waso', 'Wamba West', 'Wamba East', 'Wamba North']
        } else if (constituency == 'Kwanza') {
            data = ['Kapomboi', 'Kwanza', 'Keiyo', 'Bidii']
        } else if (constituency == 'Endebess') {
            data = ['Chepchoina', 'Endebess', 'Matumbei']
        } else if (constituency == 'Saboti') {
            data = ['Kinyoro', 'Matisi', 'Tuwani', 'Saboti', 'Machewa']
        } else if (constituency == 'Kiminini') {
            data = ['Kiminini', 'Waitaluk', 'Sirende', 'Hospital', 'Sikhendu', 'Nabiswa']
        } else if (constituency == 'Cherangany') {
            data = ['Sinyerere', 'Makutano', 'Kaplamai', 'Motosiet', 'Cherangany/Suwerwa', 'Chepsiro/Kiptoror', 'Sitatunga']
        } else if (constituency == 'Soy') {
            data = [" Moi's Bridge ", 'Kapkures', 'Ziwa', 'Segero/Barsombe', 'Kipsomba', 'Soy', 'Kuinet/Kapsuswa']
        } else if (constituency == 'Turbo') {
            data = ['Ngenyilel', 'Tapsagoi', 'Kamagut', 'Kiplombe', 'Kapsaos', 'Huruma']
        } else if (constituency == 'Moiben') {
            data = ['Tembelio', 'Sergoit', 'Karuna/Meibeki', 'Moiben', 'Kimumu']
        } else if (constituency == 'Ainabkoi') {
            data = ['Kapsoya', 'Kaptagat', 'Ainabkoi/Olare']
        } else if (constituency == 'Kapseret') {
            data = ['Simat/Kapseret', 'Kipkenyo', 'Ngeria', 'Megun', 'Langas']
        } else if (constituency == 'Kesses') {
            data = ['Racecourse', 'Cheptiret/Kipchamo', 'Tulwet/Chuiyat', 'Tarakwa']
        } else if (constituency == 'Marakwet East') {
            data = ['Kapyego', 'Sambirir', 'Endo', 'Embobut / Embulot']
        } else if (constituency == 'Marakwet West') {
            data = ['Lelan', 'Sengwer', " Cherang'any/Chebororwa ", 'Moiben/Kuserwo', 'Kapsowar', 'Arror']
        } else if (constituency == 'Keiyo North') {
            data = ['Emsoo', 'Kamariny', 'Kapchemutwa', 'Tambach']
        } else if (constituency == 'Keiyo South') {
            data = ['Kaptarakwa', 'Chepkorio', 'Soy North', 'Soy South', 'Kabiemit', 'Metkei']
        } else if (constituency == 'Tinderet') {
            data = ['Songhor/Soba', 'Tindiret', 'Chemelil/Chemase', 'Kapsimotwo']
        } else if (constituency == 'Aldai') {
            data = ['Kabwareng', 'Terik', 'Kemeloi-Maraba', 'Kobujoi', 'Kaptumo-Kaboi', 'Koyo-Ndurio']
        } else if (constituency == 'Nandi Hills') {
            data = ['Nandi Hills', 'Chepkunyuk', " Ol'lessos ", 'Kapchorua']
        } else if (constituency == 'Chesumei') {
            data = [" Chemundu/Kapng'etuny ", 'Kosirai', 'Lelmokwo/Ngechek', 'Kaptel/Kamoiywo', 'Kiptuya']
        } else if (constituency == 'Emgwen') {
            data = ['Chepkumia', 'Kapkangani', 'Kapsabet', 'Kilibwoni']
        } else if (constituency == 'Mosop') {
            data = ['Chepterwai', 'Kipkaren', 'Kurgung/Surungai', 'Kabiyet', 'Ndalat', 'Kabisaga', 'Sangalo/Kebulonik']
        } else if (constituency == 'Kilifi North') {
            data = ['Tezo', 'Sokoni', 'Kibarani', 'Dabaso', 'Matsangoni', 'Watamu', 'Mnarani']
        } else if (constituency == 'Kilifi South') {
            data = ['Junju', 'Mwarakaya', 'Shimo La Tewa', 'Chasimba', 'Mtepeni']
        } else if (constituency == 'Kaloleni') {
            data = ['Mariakani', 'Kayafungo', 'Kaloleni', 'Mwanamwinga']
        } else if (constituency == 'Rabai') {
            data = ['Mwawesa', 'Ruruma', 'Kambe/Ribe', 'Rabai/Kisurutini']
        } else if (constituency == 'Ganze') {
            data = ['Ganze', 'Bamba', 'Jaribuni', 'Sokoke']
        } else if (constituency == 'Malindi') {
            data = ['Jilore', 'Kakuyuni', 'Ganda', 'Malindi Town', 'Shella']
        } else if (constituency == 'Magarini') {
            data = ['Marafa', 'Magarini', 'Gongoni', 'Adu', 'Garashi', 'Sabaki']
        } else if (constituency == 'Tiaty') {
            data = ['Tirioko', 'Kolowa', 'Ribkwo', 'Silale', 'Loiyamorock', 'Tangulbei/Korossi', 'Churo/Amaya']
        } else if (constituency == 'Baringo') {
            data = ['Barwessa', 'Kabartonjo', 'Saimo/Kipsaraman', 'Saimo/Soi', 'Bartabwa']
        } else if (constituency == 'Baringo Central') {
            data = ['Kabarnet', 'Sacho', 'Tenges', 'Ewalel/Chapchap', 'Kapropita']
        } else if (constituency == 'Baringo South') {
            data = ['Marigat', 'Ilchamus', 'Mochongoi', 'Mukutani']
        } else if (constituency == 'Mogotio') {
            data = ['Mogotio', 'Emining', 'Kisanana']
        } else if (constituency == 'Eldama Ravine') {
            data = ['Lembus', 'Lembus Kwen', 'Ravine', 'Mumberes/Maji Mazuri', 'Lembus/Perkerra', 'Koibatek']
        } else if (constituency == 'Laikipia West') {
            data = ['Ol-Moran', 'Rumuruti Township', 'Githiga', 'Marmanet', 'Igwamiti', 'Salama']
        } else if (constituency == 'Laikipia East') {
            data = ['Ngobit', 'Tigithi', 'Thingithu', 'Nanyuki', 'Umande']
        } else if (constituency == 'Laikipia North') {
            data = ['Sosian', 'Segera', 'Mugogodo West', 'Mugogodo East']
        } else if (constituency == 'Molo') {
            data = ['Turi', 'Mariashoni', 'Elburgon', 'Molo']
        } else if (constituency == 'Njoro') {
            data = ['Mau Narok', 'Mauche', 'Kihingo', 'Nessuit', 'Lare', 'Njoro']
        } else if (constituency == 'Naivasha') {
            data = ['Biashara', 'Hells Gate', 'Lake View', 'Mai Mahiu', 'Maiella', 'Olkaria', 'Naivasha East', 'Viwandani']
        } else if (constituency == 'Gilgil') {
            data = ['Gilgil', 'Elementaita', 'Mbaruk/Eburu', 'Malewa West', 'Murindati']
        } else if (constituency == 'Kuresoi South') {
            data = ['Amalo', 'Keringet', 'Kiptagich', 'Tinet']
        } else if (constituency == 'Kuresoi North') {
            data = ['Kiptororo', 'Nyota', 'Sirikwa', 'Kamara']
        } else if (constituency == 'Subukia') {
            data = ['Subukia', 'Waseges', 'Kabazi']
        } else if (constituency == 'Rongai') {
            data = ['Menengai West', 'Soin', 'Visoi', 'Mosop', 'Solai']
        } else if (constituency == 'Bahati') {
            data = ['Dundori', 'Kabatini', 'Kiamaina', 'Lanet/Umoja', 'Bahati']
        } else if (constituency == 'Nakuru Town West') {
            data = ['Barut', 'London', 'Kaptembwo', 'Kapkures', 'Rhoda', 'Shaabab']
        } else if (constituency == 'Nakuru Town East') {
            data = ['Biashara', 'Kivumbini', 'Flamingo', 'Menengai', 'Nakuru East']
        } else if (constituency == 'Kilgoris') {
            data = ['Kilgoris Central', 'Keyian', 'Angata Barikoi', 'Shankoe', 'Kimintet', 'Lolgorian']
        } else if (constituency == 'Emurua Dikirr') {
            data = ['Ilkerin', 'Ololmasani', 'Mogondo', 'Kapsasian']
        } else if (constituency == 'Narok North') {
            data = ['Olpusimoru', 'Olokurto', 'Narok Town', 'Nkareta', 'Olorropil', 'Melili']
        } else if (constituency == 'Narok East') {
            data = ['Mosiro', 'Ildamat', 'Keekonyokie', 'Suswa']
        } else if (constituency == 'Narok South') {
            data = ['Majimoto/Naroosura', " Ololulung'a ", 'Melelo', 'Loita', 'Sogoo', 'Sagamian']
        } else if (constituency == 'Narok West') {
            data = ['Ilmotiok', 'Mara', 'Siana', 'Naikarra']
        } else if (constituency == 'Kajiado North') {
            data = ['Olkeri', 'Ongata Rongai', 'Nkaimurunya', 'Oloolua', 'Ngong']
        } else if (constituency == 'Kajiado Central') {
            data = ['Purko', 'Ildamat', 'Dalalekutuk', 'Matapato North', 'Matapato South']
        } else if (constituency == 'Kajiado East') {
            data = ['Kaputiei North', 'Kitengela', 'Oloosirkon/Sholinke', 'Kenyawa-Poka', 'Imaroro']
        } else if (constituency == 'Kajiado West') {
            data = ['Keekonyokie', 'Iloodokilani', 'Magadi', " Ewuaso Oonkidong'i ", 'Mosiro']
        } else if (constituency == 'Kajiado South') {
            data = ['Entonet/Lenkisim', 'Mbirikani/Eselenkei', 'Kuku', 'Rombo', 'Kimana']
        } else if (constituency == 'Kipkelion East') {
            data = ['Londiani', 'Kedowa/Kimugul', 'Chepseon', 'Tendeno/Sorget']
        } else if (constituency == 'Kipkelion West') {
            data = ['Kunyak', 'Kamasian', 'Kipkelion', 'Chilchila']
        } else if (constituency == 'Ainamoi') {
            data = ['Kapsoit', 'Ainamoi', 'Kapkugerwet', 'Kipchebor', 'Kipchimchim', 'Kapsaos']
        } else if (constituency == 'Bureti') {
            data = ['Kisiara', 'Tebesonik', 'Cheboin', 'Chemosot', 'Litein', 'Cheplanget', 'Kapkatet']
        } else if (constituency == 'Belgut') {
            data = ['Waldai', 'Kabianga', 'Cheptororiet/Seretut', 'Chaik', 'Kapsuser']
        } else if (constituency == 'Sigowet/Soin') {
            data = ['Sigowet', 'Kaplelartet', 'Soliat', 'Soin']
        } else if (constituency == 'Sotik') {
            data = ['Ndanai/Abosi', 'Chemagel', 'Kipsonoi', 'Kapletundo', 'Rongena/Manaret']
        } else if (constituency == 'Chepalungu') {
            data = ["Kong'asis ", 'Nyangores', 'Sigor', 'Chebunyo', 'Siongiroi']
        } else if (constituency == 'Bomet East') {
            data = ['Merigi', 'Kembu', 'Longisa', 'Kipreres', 'Chemaner']
        } else if (constituency == 'Bomet Central') {
            data = ['Silibwet Township', 'Ndaraweta', 'Singorwet', 'Chesoen', 'Mutarakwa']
        } else if (constituency == 'Konoin') {
            data = ['Chepchabas', 'Kimulot', 'Mogogosiek', 'Boito', 'Embomos']
        } else if (constituency == 'Lugari') {
            data = ['Mautuma', 'Lugari', 'Lumakanda', 'Chekalini', 'Chevaywa', 'Lwandeti']
        } else if (constituency == 'Likuyani') {
            data = ['Likuyani', 'Sango', 'Kongoni', 'Nzoia', 'Sinoko']
        } else if (constituency == 'Malava') {
            data = ['West Kabras', 'Chemuche', 'East Kabras', 'Butali/Chegulo', 'Manda-Shivanga', 'Shirugu-Mugai', 'South Kabras']
        } else if (constituency == 'Lurambi') {
            data = ['Butsotso East', 'Butsotso South', 'Butsotso Central', 'Sheywe', 'Mahiakalo', 'Shirere']
        } else if (constituency == 'Navakholo') {
            data = ['Ingostse-Mathia', 'Shinoyi-Shikomari-Esumeyia', 'Bunyala West', 'Bunyala East', 'Bunyala Central']
        } else if (constituency == 'Mumias West') {
            data = ['Mumias Central', 'Mumias North', 'Etenje', 'Musanda']
        } else if (constituency == 'Mumias East') {
            data = ['Lusheya/Lubinu', 'Malaha/Isongo/Makunga', 'East Wanga']
        } else if (constituency == 'Matungu') {
            data = ['Koyonzo', 'Kholera', 'Khalaba', 'Mayoni', 'Namamali']
        } else if (constituency == 'Butere') {
            data = ['Marama West', 'Marama Central', 'Marenyo - Shianda', 'Marama North', 'Marama South']
        } else if (constituency == 'Khwisero') {
            data = ['Kisa North', 'Kisa East', 'Kisa West', 'Kisa Central']
        } else if (constituency == 'Shinyalu') {
            data = ['Isukha North', 'Murhanda', 'Isukha Central', 'Isukha South', 'Isukha East', 'Isukha West']
        } else if (constituency == 'Ikolomani') {
            data = ['Idakho South', 'Idakho East', 'Idakho North', 'Idakho Central']
        } else if (constituency == 'Vihiga') {
            data = ['Lugaga-Wamuluma', 'South Maragoli', 'Central Maragoli', 'Mungoma']
        } else if (constituency == 'Sabatia') {
            data = ['Lyaduywa/Izava', 'West Sabatia', 'Chavakali', 'North Maragoli', 'Wodanga', 'Busali']
        } else if (constituency == 'Hamisi') {
            data = ['Shiru', 'Gisambai', 'Shamakhokho', 'Banja', 'Muhudu', 'Tambua', 'Jepkoyai']
        } else if (constituency == 'Luanda') {
            data = ['Luanda Township', 'Wemilabi', 'Mwibona', 'Luanda South', 'Emabungo']
        } else if (constituency == 'Emuhaya') {
            data = ['North East Bunyore', 'Central Bunyore', 'West Bunyore']
        } else if (constituency == 'Mt. Elgon') {
            data = ['Cheptais', 'Chesikaki', 'Chepyuk', 'Kapkateny', 'Kaptama', 'Elgon']
        } else if (constituency == 'Sirisia') {
            data = ['Namwela', 'Malakisi/South Kulisiru', 'Lwandanyi']
        } else if (constituency == 'Kabuchai') {
            data = ['Kabuchai/Chwele', 'West Nalondo', 'Bwake/Luuya', 'Mukuyuni']
        } else if (constituency == 'Bumula') {
            data = ['South Bukusu', 'Bumula', 'Khasoko', 'Kabula', 'Kimaeti', 'West Bukusu', 'Siboti']
        } else if (constituency == 'Kanduyi') {
            data = ['Bukembe West', 'Bukembe East', 'Township', 'Khalaba', 'Musikoma', " East Sang'alo ", 'Marakaru/Tuuti', " West Sang'alo "]
        } else if (constituency == 'Webuye East') {
            data = ['Mihuu', 'Ndivisi', 'Maraka']
        } else if (constituency == 'Webuye West') {
            data = ['Misikhu', 'Sitikho', 'Matulo', 'Bokoli']
        } else if (constituency == 'Kimilili') {
            data = ['Kibingei', 'Kimilili', 'Maeni', 'Kamukuywa']
        } else if (constituency == 'Tongaren') {
            data = ['Naitiri/Kabuyefwe', 'Milima', 'Ndalu/ Tabani', 'Tongaren', 'Soysambu/ Mitua']
        } else if (constituency == 'Garsen') {
            data = ['Kipini East', 'Garsen South', 'Kipini West', 'Garsen Central', 'Garsen West', 'Garsen North']
        } else if (constituency == 'Galole') {
            data = ['Kinakomba', 'Mikinduni', 'Chewani', 'Wayu']
        } else if (constituency == 'Bura') {
            data = ['Chewele', 'Hirimani', 'Bangale', 'Sala', 'Madogo']
        } else if (constituency == 'Teso North') {
            data = ['Malaba Central', 'Malaba North', " Ang'urai South ", " Ang'urai North ", " Ang'urai East ", 'Malaba South']
        } else if (constituency == 'Teso South') {
            data = [" Ang'orom ", 'Chakol South', 'Chakol North', 'Amukura West', 'Amukura East', 'Amukura Central']
        } else if (constituency == 'Nambale') {
            data = ['Nambale Township', 'Bukhayo North/Waltsi', 'Bukhayo East', 'Bukhayo Central']
        } else if (constituency == 'Matayos') {
            data = ['Bukhayo West', 'Mayenje', 'Matayos South', 'Busibwabo', 'Burumba']
        } else if (constituency == 'Butula') {
            data = ['Marachi West', 'Kingandole', 'Marachi Central', 'Marachi East', 'Marachi North', 'Elugulu']
        } else if (constituency == 'Funyula') {
            data = ['Namboboto Nambuku', 'Nangina', " Ageng'a Nanguba ", 'Bwiri']
        } else if (constituency == 'Budalangi') {
            data = ['Bunyala Central', 'Bunyala North', 'Bunyala West', 'Bunyala South']
        } else if (constituency == 'Ugenya') {
            data = ['West Ugenya', 'Ukwala', 'North Ugenya', 'East Ugenya']
        } else if (constituency == 'Ugunja') {
            data = ['Sidindi', 'Sigomere', 'Ugunja']
        } else if (constituency == 'Alego Usonga') {
            data = ['Usonga', 'West Alego', 'Central Alego', 'Siaya Township', 'North Alego', 'South East Alego']
        } else if (constituency == 'Gem') {
            data = ['North Gem', 'West Gem', 'Central Gem', 'Yala Township', 'East Gem', 'South Gem']
        } else if (constituency == 'Bondo') {
            data = ['West Yimbo', 'Central Sakwa', 'South Sakwa', 'Yimbo East', 'West Sakwa', 'North Sakwa']
        } else if (constituency == 'Rarieda') {
            data = ['East Asembo', 'West Asembo', 'North Uyoma', 'South Uyoma', 'West Uyoma']
        } else if (constituency == 'Kisumu East') {
            data = ['Kajulu', 'Kolwa East', " Manyatta'B'", " Nyalenda'A'", 'Kolwa Central']
        } else if (constituency == 'Kisumu West') {
            data = ['South West Kisumu', 'Central Kisumu', 'Kisumu North', 'West Kisumu', 'North West Kisumu']
        } else if (constituency == 'Kisumu Central') {
            data = ['Railways', 'Migosi', 'Shaurimoyo Kaloleni', 'Market Milimani', 'Kondele', 'Nyalenda B']
        } else if (constituency == 'Seme') {
            data = ['West Seme', 'Central Seme', 'East Seme', 'North Seme']
        } else if (constituency == 'Nyando') {
            data = ['East Kano/Wawidhi', 'Awasi/Onjiko', 'Ahero', 'Kabonyo/Kanyagwal', 'Kobura']
        } else if (constituency == 'Muhoroni') {
            data = ['Miwani', 'Ombeyi', " Masogo/Nyang'oma ", 'Chemelil', 'Muhoroni/Koru']
        } else if (constituency == 'Nyakach') {
            data = ['South West Nyakach', 'North Nyakach', 'Central Nyakach', 'West Nyakach', 'South East Nyakach']
        } else if (constituency == 'Kasipul') {
            data = ['West Kasipul', 'South Kasipul', 'Central Kasipul', 'East Kamagak', 'West Kamagak']
        } else if (constituency == 'Kabondo Kasipul') {
            data = ['Kabondo East', 'Kabondo West', 'Kokwanyo/Kakelo', 'Kojwach']
        } else if (constituency == 'Karachuonyo') {
            data = ['West Karachuonyo', 'North Karachuonyo', 'Central', 'Kanyaluo', 'Kibiri', 'Wangchieng', 'Kendu Bay Town']
        } else if (constituency == 'Rangwe') {
            data = ['West Gem', 'East Gem', 'Kagan', 'Kochia']
        } else if (constituency == 'Homa Bay Town') {
            data = ['Homa Bay Central', 'Homa Bay Arujo', 'Homa Bay West', 'Homa Bay East']
        } else if (constituency == 'Ndhiwa') {
            data = ['Kwabwai', 'Kanyadoto', 'Kanyikela', 'Kabuoch North', 'Kabuoch South/Pala', 'Kanyamwa Kologi', 'Kanyamwa Kosewe']
        } else if (constituency == 'Suba North') {
            data = ['Mfangano Island', 'Rusinga Island', 'Kasgunga', 'Gembe', 'Lambwe']
        } else if (constituency == 'Suba South') {
            data = ['Gwassi South', 'Gwassi North', 'Kaksingri West', 'Ruma-Kaksingri']
        } else if (constituency == 'Rongo') {
            data = ['North Kamagambo', 'Central Kamagambo', 'East Kamagambo', 'South Kamagambo']
        } else if (constituency == 'Awendo') {
            data = ['North Sakwa', 'South Sakwa', 'West Sakwa', 'Central Sakwa']
        } else if (constituency == 'Suna East') {
            data = ['God Jope', 'Suna Central', 'Kakrao', 'Kwa']
        } else if (constituency == 'Suna West') {
            data = ['Wiga', 'Wasweta Ii', 'Ragana-Oruba', 'Wasimbete']
        } else if (constituency == 'Uriri') {
            data = ['West Kanyamkago', 'North Kanyamkago', 'Central Kanyamkago', 'South Kanyamkago', 'East Kanyamkago']
        } else if (constituency == 'Nyatike') {
            data = [" Kachien'g ", 'Kanyasa', 'North Kadem', 'Macalder/Kanyarwanda', 'Kaler', 'Got Kachola', 'Muhuru']
        } else if (constituency == 'Kuria West') {
            data = ['Bukira East', 'Bukira Centrl/Ikerege', 'Isibania', 'Makerero', 'Masaba', 'Tagare', 'Nyamosense/Komosoko']
        } else if (constituency == 'Kuria East') {
            data = ['Gokeharaka/Getambwega', 'Ntimaru West', 'Ntimaru East', 'Nyabasi East', 'Nyabasi West']
        } else if (constituency == 'Bonchari') {
            data = ['Bomariba', 'Bogiakumu', 'Bomorenda', 'Riana']
        } else if (constituency == 'South Mugirango') {
            data = ['Tabaka', " Boikang'a ", 'Bogetenga', 'Borabu / Chitago', 'Moticho', 'Getenga']
        } else if (constituency == 'Bomachoge Borabu') {
            data = ['Bombaba Borabu', 'Boochi Borabu', 'Bokimonge', 'Magenche']
        } else if (constituency == 'Bobasi') {
            data = ['Masige West', 'Masige East', 'Basi Central', 'Nyacheki', 'Basi Bogetaorio', 'Bobasi Chache', 'Sameta/Mokwerero', 'Bobasi Boitangare']
        } else if (constituency == 'Bomachoge Chache') {
            data = ['Majoge Basi', 'Boochi/Tendere', 'Bosoti/Sengera']
        } else if (constituency == 'Nyaribari Masaba') {
            data = ['Ichuni', 'Nyamasibi', 'Masimba', 'Gesusu', 'Kiamokama']
        } else if (constituency == 'Nyaribari Chache') {
            data = ['Bobaracho', 'Kisii Central', 'Keumbu', 'Kiogoro', 'Birongo', 'Ibeno']
        } else if (constituency == 'Kitutu Chache North') {
            data = ['Monyerero', 'Sensi', 'Marani', 'Kegogi']
        } else if (constituency == 'Kitutu Chache South') {
            data = ['Bogusero', 'Bogeka', 'Nyakoe', 'Kitutu', 'Nyatieko']
        } else if (constituency == 'Kitutu Masaba') {
            data = ['Rigoma', 'Gachuba', 'Kemera', 'Magombo', 'Manga', 'Gesima']
        } else if (constituency == 'West Mugirango') {
            data = ['Nyamaiya', 'Bogichora', 'Bosamaro', 'Bonyamatuta', 'Township']
        } else if (constituency == 'North Mugirango') {
            data = ['Itibo', 'Bomwagamo', 'Bokeira', 'Magwagwa', 'Ekerenyo']
        } else if (constituency == 'Borabu') {
            data = ['Mekenene', 'Kiabonyoru', 'Nyansiongo', 'Esise']
        } else if (constituency == 'Westlands') {
            data = ['Kitisuru', 'Parklands/Highridge', 'Karura', 'Kangemi', 'Mountain View']
        } else if (constituency == 'Dagoretti North') {
            data = ['Kilimani', 'Kawangware', 'Gatina', 'Kileleshwa', 'Kabiro']
        } else if (constituency == 'Dagoretti South') {
            data = ['Mutu-Ini', 'Ngando', 'Riruta', 'Uthiru/Ruthimitu', 'Waithaka']
        } else if (constituency == 'Langata') {
            data = ['Karen', 'Nairobi West', 'Mugumu-Ini', 'South C', 'Nyayo Highrise']
        } else if (constituency == 'Kibra') {
            data = ['Laini Saba', 'Lindi', 'Makina', 'Woodley/Kenyatta Golf Course', 'Sarangombe']
        } else if (constituency == 'Roysambu') {
            data = ['Githurai', 'Kahawa West', 'Zimmerman', 'Roysambu', 'Kahawa']
        } else if (constituency == 'Kasarani') {
            data = ['Clay City', 'Mwiki', 'Kasarani', 'Njiru', 'Ruai']
        } else if (constituency == 'Ruaraka') {
            data = ['Baba Dogo', 'Utalii', 'Mathare North', 'Lucky Summer', 'Korogocho']
        } else if (constituency == 'Embakasi South') {
            data = ['Imara Daima', 'Kwa Reuben', 'Pipeline', 'Kware']
        } else if (constituency == 'Embakasi North') {
            data = ['Kariobangi North', 'Dandora Area I', 'Dandora Area Ii', 'Dandora Area Iii', 'Dandora Area Iv']
        } else if (constituency == 'Embakasi Central') {
            data = ['Kayole North', 'Kayole Central', 'Kayole South', 'Komarock', 'Matopeni/Spring Valley']
        } else if (constituency == 'Embakasi East') {
            data = ['Upper Savannah', 'Lower Savannah', 'Embakasi', 'Utawala', 'Mihango']
        } else if (constituency == 'Embakasi West') {
            data = ['Umoja I', 'Umoja Ii', 'Mowlem', 'Kariobangi South']
        } else if (constituency == 'Makadara') {
            data = ['Maringo/Hamza', 'Viwandani', 'Harambee', 'Makongeni']
        } else if (constituency == 'Kamukunji') {
            data = ['Pumwani', 'Eastleigh North', 'Eastleigh South', 'Airbase', 'California']
        } else if (constituency == 'Starehe') {
            data = ['Nairobi Central', 'Ngara', 'Pangani', 'Ziwani/Kariokor', 'Landimawe', 'Nairobi South']
        } else if (constituency == 'Mathare') {
            data = ['Hospital', 'Mabatini', 'Huruma', 'Ngei', 'Mlango Kubwa', 'Kiamaiko']
        } else if (constituency == 'Lamu East') {
            data = ['Faza', 'Kiunga', 'Basuba']
        } else if (constituency == 'Lamu West') {
            data = ['Shella', 'Mkomani', 'Hindi', 'Mkunumbi', 'Hongwe', 'Witu', 'Bahari']
        } else if (constituency == 'Taveta') {
            data = ['Chala', 'Mahoo', 'Bomani', 'Mboghoni', 'Mata']
        } else if (constituency == 'Wundanyi') {
            data = ['Wundanyi/Mbale', 'Werugha', 'Wumingu/Kishushe', 'Mwanda/Mgange']
        } else if (constituency == 'Mwatate') {
            data = [" Rong'e ", 'Mwatate', 'Bura', 'Chawia', 'Wusi/Kishamba']
        } else if (constituency == 'Voi') {
            data = ['Mbololo', 'Sagalla', 'Kaloleni', 'Marungu', 'Kasigau', 'Ngolia']
        } else if (constituency == 'Garissa Township') {
            data = ['Waberi', 'Galbet', 'Township', 'Iftin']
        } else if (constituency == 'Balambala') {
            data = ['Balambala', 'Danyere', 'Jara Jara', 'Saka', 'Sankuri']
        } else if (constituency == 'Lagdera') {
            data = ['Modogashe', 'Benane', 'Goreale', 'Maalimin', 'Sabena', 'Baraki']
        } else if (constituency == 'Dadaab') {
            data = ['Dertu', 'Dadaab', 'Labasigale', 'Damajale', 'Liboi', 'Abakaile']
        } else if (constituency == 'Fafi') {
            data = ['Bura', 'Dekaharia', 'Jarajila', 'Fafi', 'Nanighi']
        } else if (constituency == 'Ijara') {
            data = ['Hulugho', 'Sangailu', 'Ijara', 'Masalani']
        } else if (constituency == 'Wajir North') {
            data = ['Gurar', 'Bute', 'Korondile', 'Malkagufu', 'Batalu', 'Danaba', 'Godoma']
        } else if (constituency == 'Wajir East') {
            data = ['Wagberi', 'Township', 'Barwago', 'Khorof/Harar']
        } else if (constituency == 'Tarbaj') {
            data = ['Elben', 'Sarman', 'Tarbaj', 'Wargadud']
        } else if (constituency == 'Wajir West') {
            data = ['Arbajahan', 'Hadado/Athibohol', 'Adamasajide', 'Ganyure/Wagalla']
        } else if (constituency == 'Eldas') {
            data = ['Eldas', 'Della', 'Lakoley South/Basir', 'Elnur/Tula Tula']
        } else if (constituency == 'Wajir South') {
            data = ['Benane', 'Burder', 'Dadaja Bulla', 'Habasswein', 'Lagboghol South', 'Ibrahim Ure', 'Diif']
        } else if (constituency == 'Mandera West') {
            data = ['Takaba South', 'Takaba', 'Lagsure', 'Dandu', 'Gither']
        } else if (constituency == 'Banissa') {
            data = ['Banissa', 'Derkhale', 'Guba', 'Malkamari', 'Kiliwehiri']
        } else if (constituency == 'Mandera North') {
            data = ['Ashabito', 'Guticha', 'Morothile', 'Rhamu', 'Rhamu-Dimtu']
        } else if (constituency == 'Mandera South') {
            data = ['Wargadud', 'Kutulo', 'Elwak South', 'Elwak North', 'Shimbir Fatuma']
        } else if (constituency == 'Mandera East') {
            data = ['Arabia', 'Township', 'Neboi', 'Khalalio', 'Libehia']
        } else if (constituency == 'Lafey') {
            data = ['Sala', 'Fino', 'Lafey', 'Waranqara', 'Alango Gof']
        }


        for (var index = 0; index < data.length; index++) {
            $('#ward').append('<option value="' + data[index] + '">' + data[index] + '</option>');
        }
    } else {
        document.getElementById("ward").hidden = true;
    }
});