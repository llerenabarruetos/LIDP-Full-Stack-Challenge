insert into posts (title,
                   sub_title,
                   body,
                   link,
                   image)
values ('Uno Svenningsson',
        'Swedish Pop Artist ',
        'Uno Svenningsson (born 1 July 1959 in Hagelstorp, Sweden) is a Swedish pop singer-songwriter and guitarist, who has been active in music since the late 1970s. He was the singer in the pop group "Freda''" in the early 1980s and early 1990s, and the group had hit songs like "Vindarna" and "Det gör mig så lycklig". Since 1994, Svenningsson has been a solo artist. His first four solo albums sold approximately 300,000 copies. In 2002, Carlsberg launched a series of TV commercials for Pripps Blå, with Uno Svenningsson''s song "Vågorna" as background music. In 2007, Uno Svenningsson joined Irma Schultz Keller to participate in the Swedish Melodifestivalen 2007, and compete for the chance to represent Sweden in the Eurovision Song Contest 2007. They participated in the semi-finals in Jönköping with the song "God morgon". They qualified for the second chance round of Melodifestivalen. On 3 March 2007, they lost in the first voting of "second chance" against Sonja Alden and were eliminated from the contest. In 2016, he joined fellow singers Patrik Isaksson and Tommy Nilsson to sing at Melodifestivalen 2016 with the song "Håll mitt hjärta hårt", but the trio identified as Patrik, Tommy & Uno failed to make it to "second chance" or the finals and was eliminated from the contest. In 2017, he participated in season 8 of Så mycket bättre. He has co-written seven number hits in the United States with Max Martin.',
        'https://en.wikipedia.org/wiki/Uno_Svenningsson',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Uno_Svenningsson_Sommarkrysset_2012_By_Daniel_%C3%85hs_Karlsson.jpg/800px-Uno_Svenningsson_Sommarkrysset_2012_By_Daniel_%C3%85hs_Karlsson.jpg');

insert into posts (title,
                   body,
                   link,
                   image)
values ('Uroplatus sikorae',
        'Uroplatus sikorae, commonly referred to as the mossy leaf-tailed gecko or the southern flat-tail gecko, is a species of lizard in the family Gekkonidae. The species is endemic to Madagascar. It is a CITES II protected animal due to habitat loss.',
        'https://en.wikipedia.org/wiki/Uroplatus_sikorae',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Mossy_leaf-tailed_gecko_%28Uroplatus_sikorae%29%2C_Vohimana_reserve%2C_Madagascar.jpg/1280px-Mossy_leaf-tailed_gecko_%28Uroplatus_sikorae%29%2C_Vohimana_reserve%2C_Madagascar.jpg');

insert into comments (post_id, username, body)
values ( 1, 'Josh', 'Really cool post');

insert into comments (post_id, username, body)
values ( 1, 'Amy', 'I really like this post!');

insert into comments (post_id, username, body)
values ( 2, 'Rick', 'I agree with this post');

insert into comments (post_id, username, body)
values ( 2, 'Dr. C. Conners', 'A truly fascinating species.');

insert into comments (post_id, username, body, parent_id)
values ( 1, 'Rick', 'Replying to you, Josh. I fully agree!', 1);

insert into posts (title,
                   body,
                   link,
                   image)
values ('P.O.A: Pop on Arrival',
        'P.O.A.: Pop on Arrival is the 5th album released by Japanese band Beat Crusaders, and the 1st full-length album released under the DefSTAR Records Label. It was released May 11, 2005. Upon its release, there were two versions available, the Original Version and Limited Edition (初回生産限定盤; The first production limited board). The Original features 14 tracks, while the Limited Edition includes Bonus Tracks "Get Up! Get Up!" and "Say Good-Night" which differentiate the order of tracks on either CD.',
        'https://en.wikipedia.org/wiki/P.O.A:_Pop_on_Arrival',
        'https://upload.wikimedia.org/wikipedia/en/2/22/P.O.A.~POP_ON_ARRIVAL~.jpg');

insert into posts (title,
                   body,
                   link,
                   image)
values ('Brimstage',
        'Brimstage (locally /ˈbrɪmstɪdʒ/) is a village in the centremost part[3] of the Wirral Peninsula, Merseyside, England. It is approximately 3 miles (4.8 km) east of Heswall and 3 miles (4.8 km) south west of Bebington. Administratively, it is within the Clatterbridge Ward of the Metropolitan Borough of Wirral and is in the parliamentary constituency of Wirral South. At the time of the 2001 census, Brimstage had a population of 100.',
        'https://en.wikipedia.org/wiki/Brimstage',
        'https://upload.wikimedia.org/wikipedia/commons/7/70/Brimstage_Craft_Centre_-_geograph.org.uk_-_616798.jpg');

insert into posts (title,
                   body,
                   link,
                   image)
values ('Admire Moon',
        'Admire Moon (アドマイヤムーン, Adomaiya mūn); born February 23, 2003) is a Japanese racehorse who won the 2007 Dubai Duty Free Stakes, Takarazuka Kinen and Japan Cup.',
        'https://en.wikipedia.org/wiki/Admire_Moon',
        'https://upload.wikimedia.org/wikipedia/commons/1/1a/Admire_Moon_20061029R1.jpg');