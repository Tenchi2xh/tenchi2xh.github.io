---
date: 2016-02-03T23:55:37+01:00
draft: true
description: Lorem Markdown *ipsum*
title: This is a test
---

# Aethera in dives et animalia recepi

Lorem markdownum vertit cetera qui imagine missus; *retentis* aurea, et. Esse
guttura servatum virginis specieque dividite pondere.
Telum spuma *medio*; sine iubet oves enim gaudens non altera laudis coeperunt
pavidam ludere in sacrum? Ibi *hic novo ab* mota iungere perque, et flamine mihi
femina tamen Iuppiter inpositos thalamoque templa primaque stemus. *Sub et*
caeli praesagia times incognita et pando feruntur satis rutilos caelo. Sed fagus
agere, nec ad scissaque intabescere latus sonat memorantur velamine poterat
superosque ne licet. [Et corpora](http://www.lipsum.com/) semper protulit
poteras tremulaeque dumque.

```python
def sep():
    print '-' * 70
 
with open('data.txt', 'r') as raw_data:
    lines = map(lambda l: l.split('\t')[:28], raw_data.readlines())

    headers = lines[0]

    patients = {}
    for line in lines[1:len(lines)-4]:
        id = (line[3], line[4], line[5])
        if id in patients:
            patient = patients[id]
            patient.append(line)
            patients[id] = patient
        else:
            patients[id] = [line]
```

## Celasset telum et claro

Lorem markdownum structa. Erat hoc, huc est trisulcis clipeata excita, ensem
contrahitur dixit. Ventis enim stolidarum, caelo. Fuit quaerenti Minervae novi;
carinam et currus obest; una quod sanguine est herbis, mentes posses, revolat.
Barbaque caelo porrigit exercuit volenti fumida deae umida sine volucri.

```go
box *= netiquette_matrix + 3 / web;
var error_pppoe = 99;
gopher_interactive.disk_ict_paper += baseband_device(4, 258339 +
        address_wins + internetData, shortcutXsltLeaderboard);
var kofficeCyberbullying = mountain + trojan_volume_dv + cloud + 2;
```

## Potuit praesagaque omnibus vertice iuncisque fugam se

Crescitque permansit ore tamen [tempore](http://example.com/) cursu: radicibus
motos conplevit in. *Amens dixit* vel modo Iuppiter memorare colla introitu;
capillo. Illo ferre *loricamque* cornuaque iter
[moderamen](http://landyachtz.com/) mora ut **memorante illis** novum, ardent
figitur spatio.

Aut fidem. Si iuvencae petit, aera stagnum civit, nec, peti, stagnumque. Te
abnuat excussam Orithyiae, foret caput terras postquam portabat hordea puerum
amantibus secuta, nostri tuum corpus habet, Gryneus. Eodem pugnavique cursus
facit scelerato Trachinius haesit coniunctior aura tepente explicat unguibus
conveniant dederat ardet pro plausit dixit *fluctus inani*! Fraterque [quod
que](http://www.billmays.net/) abundet procul cadunt fata aque, exit radiante,
trepidosque longior, vitiataque donec; capi.

## Iter uvis corpora illa eris facis

Famae dubitet, hac et vultum, ora grave fit gemino dis tuaeque honore erit.
Quoque demittit furta ius latratu coniunx umentes rector soceri ego. Criminis at
armis redunco Veneris et poenas [regnum](http://news.ycombinator.com/).

- Quid et quae adopertaque tibi
- Tene tua ignes concita Amor
- Fuerat Aetnaeo

## Inde pater Iphis dixere Priamusque me repertum

Feras proles parte iras parat sinamus dixit. Deorum ceu est ossa harenae
positamque agit: non fuit piaeque, dum tanti, quam? Radere est adspiciunt torus
sit molarem ineunt sacros istae et in.

> Phoebe pectoraque non, ex notas: quando nisi crimen *auro faveas illic*, nos.
> Dumque meosque suis qualia peperit moenia videor sumus. Non cervi observo
> corpora arborea, stridula in numina optima, unum se. Silvas sollertia gramineo
> facinus summas, promissa non illa et, a! Regia prohibent forma vinctumque
> ardet orbis Cecropidis nidis Acrisioniades se et facies rexque!

Consedit obscuraque molle; post laetaris fractis quique nobis Libye. Promissa
sanguis, ver Telamoniades Irin pectora opaca? Cum cupit tres tellus vacuus
tempore Troiae cui contraxit fistula nemus; lege ligat audita moveri? Nec Icare,
gentes cecidit laceras, dedit nos illa umbra timidum siquis alvo ullus quot
instar taedae. Vulnera nihil adire neque, fui cui vir cui fecit errabat: fretum
nil.

# docker-kafka-scraper

Docker container that scrapes and parses metrics for every Kafka consumer group exposed in Zookeeper

Runs a Python program which exposes a `/metrics` endpoint through a simple web server. The program will regularly scrape all Kafka consumer groups for every topic and partition for **current offset**, **lag** and **log size**.

The metrics are exposed in the [Prometheus Text Format v0.0.4](http://prometheus.io/docs/instrumenting/exposition_formats/).

## Exposed metrics

- `kafka_consumer_offset`: current offset of the consumer
- `kafka_consumer_log_size`: log size of the consumer
- `kafka_consumer_lag`: lag of the consumer (log - offset)

Each metric is related via labels to a partition (label `pid`) and a topic (label `topic`)

## Environment variables

The default parameters of the Python scraper can be configured with the following environment variables:

 Name              | Effect                                              |       Default value   
-------------------|-----------------------------------------------------|--------------------
`ZOOKEEPER_HOST`   | Host and port of a Zookeeper instance               |              `2181`
`ZOOKEEPER_COMMAND`| Command used to run the Zookeeper client            |          `zkCli.sh`
`KAFKA_COMMAND`    | Command used to run Kafka classes                   |          `kafka.sh`
`PORT_NUMBER`      | Internal port at which metrics will be exposed      |              `5000`
`REFRESH_INTERVAL` | Interval at which metrics will be scraped (seconds) |               `300`
