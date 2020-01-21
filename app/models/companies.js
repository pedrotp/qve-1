import DS from 'ember-data';

var Companies = DS.Model.extend({
  live: DS.attr('boolean'),
  name: DS.attr('string'),
  acquired: DS.attr('boolean'),
  photo: DS.attr('string'),
  photoUrl: function() {
    return "background-image:url("+this.get("photo")+");";
  }.property('photo'),
  location: DS.attr('string'),
  url: DS.attr('string'),
  twitter: DS.attr('string'),
  angelList: DS.attr('string')
});

Companies.reopenClass({
  FIXTURES : [
    {
      id:14,
      live:true,
      name:"August",
      acquired:"Assa Abloy",
      photo:"assets/images/companies/august.png",
      location:"San Francisco, CA",
      url:"http://www.august.com",
      twitter:"http://twitter.com/AugustSmartLock",
      angelList:"http://angel.co/august-2'"
    },
    {
      id:2,
      live:true,
      name:"BrightNest",
      acquired:"Angies List",
      photo:"assets/images/companies/brightNest.png",
      location:"New York, NY",
      url:"http://brightnest.com/",
      twitter:"http://twitter.com/brightnest",
      angelList:"http://angel.co/brightnest'"
    },
    {
      id:54,
      live:true,
      name:"Cruise Automation",
      acquired:"General Motors",
      photo:"assets/images/companies/cruise.png",
      location:"San Francisco, CA",
      url:"http://www.getcruise.com",
      twitter:"http://twitter.com/cruise",
      angelList:"https://angel.co/cruise-automation"
    },
    {
      id:25,
      live:true,
      name:"FieldLens",
      acquired:"WeWork",
      photo:"assets/images/companies/fieldLens.png",
      location:"New York, NY",
      url:"http://www.fieldlens.com",
      twitter:"http://twitter.com/fieldlens",
      angelList:"http://angel.co/fieldlens'"
    },
    {
      id:3,
      live:true,
      name:"Grand St.",
      acquired:"Etsy",
      photo:"assets/images/companies/grandSt.png",
      location:"New York, NY",
      url:"https://grandst.com/",
      twitter:"http://twitter.com/grandst",
      angelList:"http://angel.co/grandst'"
    },
    {
      id:4,
      live:true,
      name:"HitPost",
      acquired:"Yahoo!",
      photo:"assets/images/companies/hitPost.png",
      location:"New York, NY",
      url:"http://hitpost.com/",
      twitter:"http://twitter.com/hitpost",
      angelList:"http://angel.co/hitpost'"
    },
    {
      id:27,
      live:true,
      name:"IMRSV",
      acquired:"Kairos",
      photo:"assets/images/companies/imrsv.png",
      location:"New York, NY",
      url:"http://www.imrsv.com",
      twitter:"http://twitter.com/imrsv",
      angelList:"http://angel.co/imrsv'"
    },
    {
      id:30,
      live:true,
      name:"LaunchRock",
      acquired:"Fundable",
      photo:"assets/images/companies/launchRock.png",
      location:"San Francisco, CA",
      url:"http://www.launchrock.com",
      twitter:"http://twitter.com/launchrock",
      angelList:"http://angel.co/launchrock'"
    },
    {
      id:5,
      live:true,
      name:"LawPivot",
      acquired:"RocketLawyer",
      photo:"assets/images/companies/lawPivot.png",
      location:"New York, NY",
      twitter:"http://twitter.com/lawpivot",
      angelList:"http://angel.co/lawpivot'"
    },
    {
      id:6,
      live:true,
      name:"Locu",
      acquired:"GoDaddy",
      photo:"assets/images/companies/locu.png",
      location:"New York, NY",
      url:"http://www.locu.com",
      twitter:"http://twitter.com/locu",
      angelList:"http://angel.co/locu'"
    },
    {
      id:36,
      live:true,
      name:"Paintzen",
      acquired:"PPG",
      photo:"assets/images/companies/paintzen.png",
      location:"New York, NY",
      url:"http://www.paintzen.com",
      twitter:"http://twitter.com/paintzen",
      angelList:"http://angel.co/paintzen'"
    },
    {
      id:1,
      live:true,
      name:"Patterns",
      acquired:"Buzzfeed",
      photo:"assets/images/companies/patterns.png",
      location:"New York, NY",
      url:"http://www.buzzfeed.com",
      twitter:"",
      angelList:""
    },
    {
      id:7,
      live:true,
      name:"SnapJoy",
      acquired:"Dropbox",
      photo:"assets/images/companies/snapJoy.png",
      location:"New York, NY",
      url:"http://www.snapjoy.com",
      twitter:"http://twitter.com/snapjoy",
      angelList:"http://angel.co/snapjoy'"
    },
    {
      id:39,
      live:true,
      name:"SponsorHub",
      acquired:"Rentrak",
      photo:"assets/images/companies/sponsorHub.png",
      location:"New York, NY",
      url:"http://www.sponsorhub.com",
      twitter:"http://twitter.com/sponsorhub",
      angelList:"http://angel.co/sponsorhub'"
    },
    {
      id:8,
      live:true,
      name:"Stypi",
      acquired:"Salesforce",
      photo:"assets/images/companies/stypi.png",
      location:"New York, NY",
      url:"http://www.stypi.com",
      twitter:"http://twitter.com/stypi",
      angelList:"http://angel.co/stypi'"
    },
    {
      id:42,
      live:true,
      name:"TapAd",
      acquired:"Telenor",
      photo:"assets/images/companies/tapAd.png",
      location:"New York, NY",
      url:"http://www.tapad.com",
      twitter:"http://twitter.com/tapad",
      angelList:"http://angel.co/tapad'"
    },
    {
      id:9,
      live:true,
      name:"TapEngage",
      acquired:"Dropbox",
      photo:"assets/images/companies/tapEngage.png",
      location:"New York, NY",
      url:"http://www.tapengage.com",
      twitter:"http://twitter.com/tapengage",
      angelList:"http://angel.co/stypi'"
    },
    {
      id:44,
      live:true,
      name:"Thinkful",
      acquired:"Chegg",
      photo:"assets/images/companies/thinkful.png",
      location:"New York, NY",
      url:"http://www.thinkful.com",
      twitter:"http://twitter.com/thinkful",
      angelList:"http://angel.co/thinkful'"
    },
    {
      id:33,
      live:true,
      name:"Veri",
      acquired:"XO Group",
      photo:"assets/images/companies/veri.png",
      location:"New York, NY",
      url: "https://www.veri.com/",
      twitter:"http://twitter.com/getveri",
      angelList:"http://angel.co/memoir"
    },
    {
      id:46,
      live:true,
      name:"Versa",
      acquired:"Change.org",
      photo:"assets/images/companies/versa.png",
      location:"New York, NY",
      url:"http://www.versahq.com",
      twitter:"http://twitter.com/versa",
      angelList:"http://angel.co/versa'"
    },
    {
      id:47,
      live:true,
      name:"Videolicious",
      acquired:"Squarespace",
      photo:"assets/images/companies/videolicious.png",
      location:"New York, NY",
      url:"http://www.videolicious.com",
      twitter:"http://twitter.com/videolicious",
      angelList:"http://angel.co/videolicious'"
    },
    {
      id:10,
      live:true,
      name:"WeHostels",
      acquired:"StudentUniverse",
      photo:"assets/images/companies/weHostels.png",
      location:"New York, NY",
      url:"http://www.wehostels.com",
      twitter:"http://twitter.com/wehostels",
      angelList:"http://angel.co/wehostels'"
    },
    {
      id:48,
      live:true,
      name:"Wallaby",
      acquired:"Bankrate",
      photo:"assets/images/companies/wallaby.png",
      location:"Passadena, CA",
      url:"http://www.walla.by",
      twitter:"http://twitter.com/wallabycard",
      angelList:"http://angel.co/wallaby-financial'"
    },
    {
      id:51,
      live:true,
      name:"YesGraph",
      acquired:"Lyft",
      photo:"assets/images/companies/yesGraph.png",
      location:"San Francisco, CA",
      url:"http://www.yesgraph.com",
      twitter:"http://twitter.com/yesgraph",
      angelList:"http://angel.co/yesgraph'"
    },
    {
      id:10,
      live:false,
      name:"Admitted.ly",
      acquired:"",
      photo:"assets/images/companies/admittedly.png",
      location:"New York, NY",
      url:"http://www.admitted.ly",
      twitter:"http://twitter.com/admitted_ly",
      angelList:"http://angel.co/admitted-ly'"
    },
    {
      id:11,
      live:false,
      name:"Artsicle",
      acquired:"",
      photo:"assets/images/companies/artsicle.png",
      location:"New York, NY",
      url:"http://www.artsicle.com",
      twitter:"http://twitter.com/artsicle",
      angelList:"http://angel.co/artsicle'"
    },
    {
      id:12,
      live:false,
      name:"Amicus",
      acquired:"",
      photo:"assets/images/companies/amicus.png",
      location:"New York, NY",
      url:"http://www.amicushq.com",
      twitter:"http://twitter.com/amicushq",
      angelList:"http://angel.co/amicus'"
    },
    {
      id:13,
      live:false,
      name:"Adcade",
      acquired:"",
      photo:"assets/images/companies/adcade.png",
      location:"New York, NY",
      url:"http://www.adcade.com",
      twitter:"http://twitter.com/adcade",
      angelList:"http://angel.co/adcade'"
    },
    {
      id:15,
      live:true,
      name:"Bench",
      acquired:"",
      photo:"assets/images/companies/bench.png",
      location:"Vancouver, BC",
      url:"http://www.bench.co",
      twitter:"http://twitter.com/benchaccounting",
      angelList:"http://angel.co/bench'"
    },
    {
      id:53,
      live:false,
      name:"Bluesmart",
      acquired:"",
      photo:"assets/images/companies/bluesmart.png",
      location:"New York, NY",
      url:"http://www.bluesmart.com",
      twitter:"http://twitter.com/bluesmart",
      angelList:"https://angel.co/bluesmart"
    },
    {
      id:16,
      live:false,
      name:"Brass Monkey",
      acquired:"",
      photo:"assets/images/companies/brassMonkey.png",
      location:"Boston MA",
      url:"http://www.playbrassmonkey.com",
      twitter:"http://twitter.com/brassmonkey",
      angelList:"http://angel.co/brassmonkey'"
    },
    {
      id:17,
      live:true,
      name:"BringMeThat",
      acquired:"",
      photo:"assets/images/companies/bringMeThat.png",
      location:"New York, NY",
      url:"http://www.bringmethat.com",
      twitter:"http://twitter.com/bringmethat",
      angelList:"http://angel.co/bringmethat'"
    },
    {
      id:52,
      live:true,
      name:"Chargehound",
      acquired:"",
      photo:"assets/images/companies/chargehound.png",
      location:"Oakland, CA",
      url:"http://www.chargehound.com",
      twitter:"http://twitter.com/chargehound",
      angelList:"https://angel.co/chargehound"
    },
    {
      id:18,
      live:false,
      name:"Circa",
      acquired:"",
      photo:"assets/images/companies/circa.png",
      location:"San Francisco, CA",
      url:"http://www.cir.ca",
      twitter:"http://twitter.com/circanews",
      angelList:"http://angel.co/circa'"
    },
    {
      id:19,
      live:false,
      name:"Clip",
      acquired:"",
      photo:"assets/images/companies/clip.png",
      location:"San Francisco, CA",
      twitter:"http://twitter.com/cliplabs",
      angelList:"http://angel.co/clip'"
    },
    {
      id:20,
      live:false,
      name:"Clothia",
      acquired:"",
      photo:"assets/images/companies/clothia.png",
      location:"San Francisco, CA",
      url:"http://www.clothia.com",
      twitter:"http://twitter.com/clothia",
      angelList:"http://angel.co/clothia'"
    },
    {
      id:21,
      live:false,
      name:"Comprehend",
      acquired:"",
      photo:"assets/images/companies/comprehend.png",
      location:"San Francisco, CA",
      url:"http://www.comprehend.com",
      twitter:"http://twitter.com/comprehend",
      angelList:"http://angel.co/comprehend'"
    },
    {
      id:22,
      live:false,
      name:"Disruption Corporation",
      acquired:"1776",
      photo:"assets/images/companies/disruptionCorporation.png",
      location:"Washington, DC",
      url:"http://www.disruption.vc",
      twitter:"http://twitter.com/disruptioncorp",
      angelList:"http://angel.co/disruption-corporation'"
    },
    {
      id:23,
      live:false,
      name:"Docracy",
      acquired:"",
      photo:"assets/images/companies/docracy.png",
      location:"New York, NY",
      url:"http://www.docracy.com",
      twitter:"http://twitter.com/docracy",
      angelList:"http://angel.co/docracy'"
    },
    {
      id:24,
      live:true,
      name:"Faith Street",
      acquired:"",
      photo:"assets/images/companies/faithStreet.png",
      location:"New York, NY",
      url:"http://www.faithstreet.com",
      twitter:"http://twitter.com/faithstreet",
      angelList:"http://angel.co/faithstreet'"
    },
    {
      id:56,
      live:true,
      name:"GitDuck",
      acquired:"",
      photo:"assets/images/companies/GitDuck.png",
      location:"San Francisco, CA / Remote",
      url:"https://gitduck.com",
      twitter:"http://twitter.com/gitduckhq",
      angelList:"https://angel.co/gitduck"
    },
    {
      id:26,
      live:false,
      name:"IdeaMe",
      acquired:"",
      photo:"assets/images/companies/ideaMe.png",
      location:"Buenos Aires, Argentina",
      url:"http://www.idea.me",
      twitter:"http://twitter.com/ideame",
      angelList:"http://angel.co/ideame'"
    },
    {
      id:28,
      live:false,
      name:"Keychain Logistics",
      acquired:"",
      photo:"assets/images/companies/keychainLogistics.png",
      location:"New York, NY",
      url:"http://keychainlogistics.com",
      twitter:"http://twitter.com/keychain",
      angelList:"http://angel.co/keychain-logistics'"
    },
    {
      id:29,
      live:false,
      name:"Knodes",
      acquired:"",
      photo:"assets/images/companies/knodes.png",
      location:"New York, NY",
      twitter:"http://twitter.com/knodes",
      angelList:"http://angel.co/knodes'"
    },
    {
      id:31,
      live:false,
      name:"Loverly",
      acquired:"",
      photo:"assets/images/companies/loverly.png",
      location:"New York, NY",
      url:"http://www.lover.ly",
      twitter:"http://twitter.com/loverly",
      angelList:"http://angel.co/loverly'"
    },
    {
      id:32,
      live:false,
      name:"Matchbook",
      acquired:"",
      photo:"assets/images/companies/matchbook.png",
      location:"New York, NY",
      url:"http://www.matchbook.co",
      twitter:"http://twitter.com/matchbook",
      angelList:"http://angel.co/matchbook'"
    },
    {
      id:34,
      live:false,
      name:"Moveline",
      acquired:"",
      photo:"assets/images/companies/moveline.png",
      location:"Las Vegas, NV",
      url:"http://www.moveline.com",
      twitter:"http://twitter.com/moveline",
      angelList:"http://angel.co/moveline'"
    },
    {
      id:35,
      live:true,
      name:"Nestio",
      acquired:"",
      photo:"assets/images/companies/nestio.png",
      location:"New York, NY",
      url:"http://www.nestio.com",
      twitter:"http://twitter.com/nestio",
      angelList:"http://angel.co/nestio'"
    },
    {
      id:55,
      live:true,
      name:"Noteworth",
      acquired:"",
      photo:"assets/images/companies/noteworth.png",
      location:"Hoboken, NJ",
      url:"http://www.noteworth.com",
      twitter:"http://twitter.com/noteworth_",
      angelList:"https://angel.co/noteworth"
    },
    {
      id:38,
      live:true,
      name:"SmartAsset",
      acquired:"",
      photo:"assets/images/companies/smartAsset.png",
      location:"New York, NY",
      url:"http://www.smartasset.com",
      twitter:"http://twitter.com/smartasset",
      angelList:"http://angel.co/smartasset'"
    },
    {
      id:38,
      live:false,
      name:"SmileBack",
      acquired:"",
      photo:"assets/images/companies/smileBack.png",
      location:"New York, NY",
      twitter:"http://twitter.com/smileback",
      angelList:"http://angel.co/smileback'"
    },
    {
      id:40,
      live:false,
      name:"SupplyHog",
      acquired:"",
      photo:"assets/images/companies/supplyHog.png",
      location:"Chattanooga, TN",
      url:"http://www.supplyhog.com",
      twitter:"http://twitter.com/supplyhog",
      angelList:"http://angel.co/supplyhog'"
    },
    {
      id:41,
      live:false,
      name:"TagStand",
      acquired:"",
      photo:"assets/images/companies/tagStand.png",
      location:"San Francisco, CA",
      url:"http://www.tagstand.com",
      twitter:"http://twitter.com/tagstand",
      angelList:"http://angel.co/tagstand'"
    },
    {
      id:43,
      live:true,
      name:"Ten Thousand",
      acquired:"",
      photo:"assets/images/companies/tenthousand.png",
      location:"New York, NY",
      url:"https://www.tenthousand.cc/",
      twitter:"https://twitter.com/10000apparel",
      angelList:"https://angel.co/ten-thousand"
    },
    {
      id:45,
      live:false,
      name:"ThinkUp",
      acquired:"",
      photo:"assets/images/companies/thinkUp.png",
      location:"New York, NY",
      url:"http://www.thinkup.com",
      twitter:"http://twitter.com/thinkup",
      angelList:"http://angel.co/anil-dash'"
    },
    {
      id:49,
      live:true,
      name:"WePow",
      acquired:"",
      photo:"assets/images/companies/wePow.png",
      location:"New York, NY",
      url:"http://www.wepow.com",
      twitter:"http://twitter.com/gowepow",
      angelList:"http://angel.co/wepow'"
    },
    {
      id:50,
      live:true,
      name:"Zerply",
      acquired:"",
      photo:"assets/images/companies/zerply.png",
      location:"San Francisco, CA",
      url:"http://www.zerply.com",
      twitter:"http://twitter.com/zerply",
      angelList:"http://angel.co/zerply'"
    }
  ]
});

export default Companies;
