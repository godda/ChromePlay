"use strict";

const expect = require("chai").expect;
const youtube = require("../js/youtube");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const _videoId = "dQw4w9WgXcQ";
const _videoInfo = {
  "loudness":"-20.4489994049",
  "iurlmaxres":"https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  "csi_page_type":"embed",
  "iurl":"https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  "hl":"en_US",
  "probe_url":"https://r11---sn-p5qlsned.googlevideo.com/videogoodput?id=o-AIkKVlxuN5_gHZLWgQdiy-8Df9RSWWJoi92uHX8An7x6&source=goodput&range=0-4999&expire=1458961400&ip=73.202.224.7&ms=pm&mm=35&pl=24&nh=IgpwcjA0LmlhZDI2Kgw3Mi4xNC4yMTEuMzc&sparams=id,source,range,expire,ip,ms,mm,pl,nh&signature=0D518324F6DD5B5C2004414A8CEB39A30A8454C8.8083754349F093ACFA491046342076D0056369DF&key=cms1",
  "c":"WEB",
  "muted":"0",
  "status":"ok",
  "iv3_module":"1",
  "ptchn":"38IQsAvIsxxjztdMZQtwHA",
  "fexp":"9405960,9408490,9416126,9419451,9420452,9422596,9423606,9423661,9423662,9425958,9427789,9427902,9428605,9428769,9429505,9429651,9429692,9431012,9431450,9431468,9431573,9431623,9431842,9432683,9432757",
  "idpj":"-8",
  "iurlsd":"https://i.ytimg.com/vi/dQw4w9WgXcQ/sddefault.jpg",
  "length_seconds":"213",
  "author":"RickAstleyVEVO",
  "has_cc":"False",
  "remarketing_url":"https://googleads.g.doubleclick.net/pagead/viewthroughconversion/962985656/?backend=player_vars&cname=1&cver=AS3&foc_id=38IQsAvIsxxjztdMZQtwHA&label=followon_view&ptype=no_rmkt",
  "ptk":"vevo",
  "ldpj":"-6",
  "no_get_video_log":"1",
  "watermark":",https://s.ytimg.com/yts/img/watermark/youtube_watermark-vflHX6b6E.png,https://s.ytimg.com/yts/img/watermark/youtube_hd_watermark-vflAzLcD6.png",
  "plid":"AAUu6hV0rPYr2z1y",
  "adaptive_fmts":"fps=30&url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Dvideo%252Fmp4%26dur%3D212.779%26pl%3D16%26itag%3D135%26initcwndbps%3D2162500%26clen%3D19754524%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cgcr%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26sver%3D3%26upn%3DGVvbxeqVSBM%26mm%3D31%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26gir%3Dyes%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26mv%3Dm%26lmt%3D1458217990261432&index=708-1219&s=9A09A047E39D6F9CC69ABE07BB85B023A60DEE81518.8D6210BD401C4C64EAE2F8744B0CBC36D5BC70DE&lmt=1458217990261432&itag=135&quality_label=480p&clen=19754524&bitrate=877244&size=640x480&type=video%2Fmp4%3B+codecs%3D%22avc1.4d401e%22&projection_type=1&init=0-707,fps=30&url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Dvideo%252Fwebm%26dur%3D212.746%26pl%3D16%26itag%3D244%26initcwndbps%3D2162500%26clen%3D17592770%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cgcr%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26sver%3D3%26upn%3DGVvbxeqVSBM%26mm%3D31%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26gir%3Dyes%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26mv%3Dm%26lmt%3D1449589753610021&index=243-915&s=0970978A910010F0B066FBCADE70DCF6F83007E8050.0993CD74B4CAF9C3E6D31E356B1894AEE1E64A4A&lmt=1449589753610021&itag=244&quality_label=480p&clen=17592770&bitrate=881516&size=640x480&type=video%2Fwebm%3B+codecs%3D%22vp9%22&projection_type=1&init=0-242,fps=30&url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Dvideo%252Fmp4%26dur%3D212.779%26pl%3D16%26itag%3D134%26initcwndbps%3D2162500%26clen%3D10072033%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cgcr%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26sver%3D3%26upn%3DGVvbxeqVSBM%26mm%3D31%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26gir%3Dyes%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26mv%3Dm%26lmt%3D1458218081565399&index=709-1220&s=78578508961290A6863C52BF96E89363255DF30B75B.399884BBF3CFF84E46FD7E69931A69544B2A8ABA&lmt=1458218081565399&itag=134&quality_label=360p&clen=10072033&bitrate=478865&size=480x360&type=video%2Fmp4%3B+codecs%3D%22avc1.4d401e%22&projection_type=1&init=0-708,fps=30&url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Dvideo%252Fwebm%26dur%3D212.746%26pl%3D16%26itag%3D243%26initcwndbps%3D2162500%26clen%3D10229787%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cgcr%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26sver%3D3%26upn%3DGVvbxeqVSBM%26mm%3D31%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26gir%3Dyes%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26mv%3Dm%26lmt%3D1449589752823699&index=243-913&s=7BE7BEEF3A81529F9B593E8480A4AD6C0B8E4457FF6.BF4ECACA85B1DBBF865E67CE046DE988CB09AD83&lmt=1449589752823699&itag=243&quality_label=360p&clen=10229787&bitrate=473096&size=480x360&type=video%2Fwebm%3B+codecs%3D%22vp9%22&projection_type=1&init=0-242,fps=30&url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Dvideo%252Fmp4%26dur%3D212.779%26pl%3D16%26itag%3D133%26initcwndbps%3D2162500%26clen%3D4919888%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cgcr%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26sver%3D3%26upn%3DGVvbxeqVSBM%26mm%3D31%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26gir%3Dyes%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26mv%3Dm%26lmt%3D1458218044287523&index=708-1219&s=B2DB2D7B53FEA24594CC232278B248C37F3F46B17EA.AAD273603783F6E55DEF840E6F4D5E1BA67A790B&lmt=1458218044287523&itag=133&quality_label=240p&clen=4919888&bitrate=188719&size=320x240&type=video%2Fmp4%3B+codecs%3D%22avc1.4d400d%22&projection_type=1&init=0-707,fps=30&url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Dvideo%252Fwebm%26dur%3D212.746%26pl%3D16%26itag%3D242%26initcwndbps%3D2162500%26clen%3D5758017%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cgcr%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26sver%3D3%26upn%3DGVvbxeqVSBM%26mm%3D31%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26gir%3Dyes%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26mv%3Dm%26lmt%3D1449589752800135&index=242-912&s=C6EC6E71A1F14C2B4045FB281951DA67234E85E5674.52803D9E2746B6164A631978EFEF1298A059610F&lmt=1449589752800135&itag=242&quality_label=240p&clen=5758017&bitrate=256016&size=320x240&type=video%2Fwebm%3B+codecs%3D%22vp9%22&projection_type=1&init=0-241,fps=30&url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Dvideo%252Fmp4%26dur%3D212.779%26pl%3D16%26itag%3D160%26initcwndbps%3D2162500%26clen%3D2206120%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cgcr%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26sver%3D3%26upn%3DGVvbxeqVSBM%26mm%3D31%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26gir%3Dyes%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26mv%3Dm%26lmt%3D1458218067800090&index=672-1183&s=905905DE0EA8C0E9B29C42A0CD51D1FA1CDB51BD47D.0C5CFC7EAFBFAA16842E06479CBAD21E32299619&lmt=1458218067800090&itag=160&quality_label=144p&clen=2206120&bitrate=84660&size=192x144&type=video%2Fmp4%3B+codecs%3D%22avc1.4d400c%22&projection_type=1&init=0-671,fps=15&url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Dvideo%252Fwebm%26dur%3D212.746%26pl%3D16%26itag%3D278%26initcwndbps%3D2162500%26clen%3D2498642%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cgcr%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26sver%3D3%26upn%3DGVvbxeqVSBM%26mm%3D31%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26gir%3Dyes%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26mv%3Dm%26lmt%3D1449589752746384&index=241-910&s=6756756C60536B131D34FE16F7D879D42E715DB3C65.7945AA9A782C88B1E2A90C06F373AB5C52B0A830&lmt=1449589752746384&itag=278&quality_label=144p&clen=2498642&bitrate=103500&size=192x144&type=video%2Fwebm%3B+codecs%3D%22vp9%22&projection_type=1&init=0-240,s=B89B89AE3DA814A841CE3810EC117B14CF83888C470.D4F2CBA59D7FE65A269880EB10B17D4A441251FF&index=592-887&type=audio%2Fmp4%3B+codecs%3D%22mp4a.40.2%22&url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Daudio%252Fmp4%26dur%3D212.834%26pl%3D16%26itag%3D140%26initcwndbps%3D2162500%26clen%3D3381301%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cgcr%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26sver%3D3%26upn%3DGVvbxeqVSBM%26mm%3D31%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26gir%3Dyes%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26mv%3Dm%26lmt%3D1458217194731183&projection_type=1&clen=3381301&init=0-591&lmt=1458217194731183&bitrate=128130&itag=140,s=0FD0FD7DE79920287BD86934BFC99EE1A748F46486D.544197A5DD22513B7DC9B1066ECC46AF8A17E42D&index=4452-4822&type=audio%2Fwebm%3B+codecs%3D%22vorbis%22&url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Daudio%252Fwebm%26dur%3D212.769%26pl%3D16%26itag%3D171%26initcwndbps%3D2162500%26clen%3D3229752%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cgcr%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26sver%3D3%26upn%3DGVvbxeqVSBM%26mm%3D31%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26gir%3Dyes%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26mv%3Dm%26lmt%3D1449589037360428&projection_type=1&clen=3229752&init=0-4451&lmt=1449589037360428&bitrate=129299&itag=171,s=0DD0DDB78E191601300466C16EDA9A2ACDD1CDEE4A0.5C847332208B56D5C54DDD696349E9D61A3179EC&index=272-641&type=audio%2Fwebm%3B+codecs%3D%22opus%22&url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Daudio%252Fwebm%26dur%3D212.781%26pl%3D16%26itag%3D249%26initcwndbps%3D2162500%26clen%3D1329354%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cgcr%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26sver%3D3%26upn%3DGVvbxeqVSBM%26mm%3D31%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26gir%3Dyes%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26mv%3Dm%26lmt%3D1449589146451888&projection_type=1&clen=1329354&init=0-271&lmt=1449589146451888&bitrate=52205&itag=249,s=CF6CF6E258B6F7E51075CD74D8A6BAA6D6A5016AE24.5621C3C08510C9DEBFD9CC780059A5978F2B63D2&index=272-642&type=audio%2Fwebm%3B+codecs%3D%22opus%22&url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Daudio%252Fwebm%26dur%3D212.781%26pl%3D16%26itag%3D250%26initcwndbps%3D2162500%26clen%3D1705295%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cgcr%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26sver%3D3%26upn%3DGVvbxeqVSBM%26mm%3D31%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26gir%3Dyes%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26mv%3Dm%26lmt%3D1449589114730126&projection_type=1&clen=1705295&init=0-271&lmt=1449589114730126&bitrate=69240&itag=250,s=EFEEFEC37238FA57186C93CC1C2D888C830757ED1DA.4340FC9CA15B4D373196B934DAAB72FB9FA81F17&index=272-642&type=audio%2Fwebm%3B+codecs%3D%22opus%22&url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Daudio%252Fwebm%26dur%3D212.781%26pl%3D16%26itag%3D251%26initcwndbps%3D2162500%26clen%3D3532374%26ipbits%3D0%26sparams%3Dclen%252Cdur%252Cgcr%252Cgir%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26sver%3D3%26upn%3DGVvbxeqVSBM%26mm%3D31%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26gir%3Dyes%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26mv%3Dm%26lmt%3D1449589021192374&projection_type=1&clen=3532374&init=0-271&lmt=1449589021192374&bitrate=141162&itag=251",
  "avg_rating":"4.80268568921",
  "view_count":"190547480",
  "is_listed":"1",
  "fmt_list":"43/640x360/99/0/0,18/640x360/9/0/115,5/426x240/7/0/0,36/426x240/99/1/0,17/256x144/99/1/0,13/256x144/99/1/0",
  "eventid":"6O31VryjKNiU-gPP74ywDQ",
  "ucid":"UC38IQsAvIsxxjztdMZQtwHA",
  "iv_load_policy":"1",
  "of":"q4YgaX8gtQlfNg08-ffDRg",
  "sw":"1.0",
  "cver":"1.20160323",
  "iv_module":"https://s.ytimg.com/yts/swfbin/player-vfl2Uqjo9/iv_module.swf",
  "account_playback_token":"QUFFLUhqa2tSWmJEVHZBSGZzcHQ4cF9nQlRLOVJFbVNnUXxBQ3Jtc0tsNXZIRnVTak84MktjWVJBU2RBUXRCVlJSaW9RVmpWbjRZYkJfVU5PT0wwVlVzU04yakhFR25lallzWnFSQ2FTN3AzcWNxM0c4ckhkekZXLXZ4U0hUYUNIZDhEUjVyZ2pWaERDMER6T19CZF90MC1Fdw==",
  "storyboard_spec":"https://i.ytimg.com/sb/dQw4w9WgXcQ/storyboard3_L$L/$N.jpg|48#27#100#10#10#0#default#TUpwxuxsGu9jUIvQW0rm8olGlUA|60#45#108#10#10#2000#M$M#4wCI9Y3VNCeT8ZYG18_y84JQoCE|120#90#108#5#5#2000#M$M#gBiigHE3LfnW94xavJJibfJ6PfQ|240#180#108#3#3#2000#M$M#Jw5wgsqnLRdeDHh4MO8vmuHxj64",
  "pltype":"content",
  "video_id":"dQw4w9WgXcQ",
  "timestamp":"1458957800",
  "iurlmq":"https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
  "dashmpd":"https://manifest.googlevideo.com/api/manifest/dash/upn/notyD9YMNy4/nh/IgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE/sparams/as%2Cgcr%2Chfr%2Cid%2Cip%2Cipbits%2Citag%2Cmm%2Cmn%2Cms%2Cmv%2Cnh%2Cpl%2Cplayback_host%2Crequiressl%2Csource%2Cexpire/mn/sn-o097zne7/id/o-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L/hfr/1/source/youtube/mv/m/ms/au/key/yt6/ip/73.202.224.7/expire/1458979400/pl/16/itag/0/gcr/us/mt/1458957708/requiressl/yes/fexp/9405960%2C9408490%2C9416126%2C9419451%2C9420452%2C9422596%2C9423606%2C9423661%2C9423662%2C9425958%2C9427789%2C9427902%2C9428605%2C9428769%2C9429505%2C9429651%2C9429692%2C9431012%2C9431450%2C9431468%2C9431573%2C9431623%2C9431842%2C9432683%2C9432757/ipbits/0/mm/31/as/fmp4_audio_clear%2Cwebm_audio_clear%2Cfmp4_sd_hd_clear%2Cwebm_sd_hd_clear%2Cwebm2_sd_hd_clear/playback_host/r12---sn-o097zne7.googlevideo.com/s/DCBDCB343CCD173312A43E032F85C078C642B5A08B7.D52B05AE4CC51D0F3FBFA746DF4C30BC0047204F/sver/3",
  "url_encoded_fmt_stream_map":"url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Dvideo%252Fwebm%26dur%3D0.000%26pl%3D16%26itag%3D43%26initcwndbps%3D2162500%26ipbits%3D0%26sparams%3Ddur%252Cgcr%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Cratebypass%252Crequiressl%252Csource%252Cupn%252Cexpire%26sver%3D3%26ratebypass%3Dyes%26upn%3D8XVxfpULnUo%26mm%3D31%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26mv%3Dm%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26lmt%3D1365503674344897&quality=medium&s=FC2FC2CB6560D77F1F2515B8959DB7ACEE8A7699666.F205404AEECF92B6C773CA78182A6DFF803B4554&type=video%2Fwebm%3B+codecs%3D%22vp8.0%2C+vorbis%22&fallback_host=tc.v19.cache8.googlevideo.com&itag=43,url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Dvideo%252Fmp4%26dur%3D212.834%26pl%3D16%26itag%3D18%26initcwndbps%3D2162500%26ipbits%3D0%26sparams%3Ddur%252Cgcr%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Cratebypass%252Crequiressl%252Csource%252Cupn%252Cexpire%26sver%3D3%26ratebypass%3Dyes%26upn%3D8XVxfpULnUo%26mm%3D31%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26mv%3Dm%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26lmt%3D1458217620648254&quality=medium&s=C6DC6DA129A24015EAE8F96943929762B7868A81C3C.F91464ED49B3CE9B8AB659676AA1E36EE3391BB8&type=video%2Fmp4%3B+codecs%3D%22avc1.42001E%2C+mp4a.40.2%22&fallback_host=tc.v19.cache6.googlevideo.com&itag=18,url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Dvideo%252Fx-flv%26dur%3D212.819%26pl%3D16%26itag%3D5%26initcwndbps%3D2162500%26ipbits%3D0%26mm%3D31%26sver%3D3%26upn%3D8XVxfpULnUo%26sparams%3Ddur%252Cgcr%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26mv%3Dm%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26lmt%3D1389150721840267&quality=small&s=F19F19B387F6EAB3306E58130C9FCE94B83D0250B72.8B4E283C46769E6DE1959C0F4387716E7CB5587E&type=video%2Fx-flv&fallback_host=tc.v17.cache4.googlevideo.com&itag=5,url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Dvideo%252F3gpp%26dur%3D212.973%26pl%3D16%26itag%3D36%26initcwndbps%3D2162500%26ipbits%3D0%26mm%3D31%26sver%3D3%26upn%3D8XVxfpULnUo%26sparams%3Ddur%252Cgcr%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26mv%3Dm%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26lmt%3D1426191608977001&quality=small&s=54454446CFC79261CE2349FD5D0A2FFCEE0B964F046.946AB8DEB410E46450A97E9B2CFC57A82DED4920&type=video%2F3gpp%3B+codecs%3D%22mp4v.20.3%2C+mp4a.40.2%22&fallback_host=tc.v12.cache3.googlevideo.com&itag=36,url=https%3A%2F%2Fr12---sn-o097zne7.googlevideo.com%2Fvideoplayback%3Fnh%3DIgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE%26expire%3D1458979400%26source%3Dyoutube%26mime%3Dvideo%252F3gpp%26dur%3D213.159%26pl%3D16%26itag%3D17%26initcwndbps%3D2162500%26ipbits%3D0%26mm%3D31%26sver%3D3%26upn%3D8XVxfpULnUo%26sparams%3Ddur%252Cgcr%252Cid%252Cinitcwndbps%252Cip%252Cipbits%252Citag%252Clmt%252Cmime%252Cmm%252Cmn%252Cms%252Cmv%252Cnh%252Cpl%252Crequiressl%252Csource%252Cupn%252Cexpire%26mn%3Dsn-o097zne7%26id%3Do-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L%26mt%3D1458957708%26mv%3Dm%26ms%3Dau%26key%3Dyt6%26ip%3D73.202.224.7%26fexp%3D9405960%252C9408490%252C9416126%252C9419451%252C9420452%252C9422596%252C9423606%252C9423661%252C9423662%252C9425958%252C9427789%252C9427902%252C9428605%252C9428769%252C9429505%252C9429651%252C9429692%252C9431012%252C9431450%252C9431468%252C9431573%252C9431623%252C9431842%252C9432683%252C9432757%26gcr%3Dus%26requiressl%3Dyes%26lmt%3D1389150750936218&quality=small&s=826826EECE2824BC2982BE0A07BFCA078D0CD5464F4.6A9169D706CF90812873BA80E3F5E817D1774D2A&type=video%2F3gpp%3B+codecs%3D%22mp4v.20.3%2C+mp4a.40.2%22&fallback_host=tc.v5.cache1.googlevideo.com&itag=17",
  "tmi":"1",
  "thumbnail_url":"https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg",
  "cl":"117986954",
  "allow_embed":"1",
  "iv_allow_in_place_switch":"1",
  "iv_invideo_url":"https://www.youtube.com/annotations_invideo?cap_hist=1&video_id=dQw4w9WgXcQ",
  "advideo":"1",
  "title":"Rick Astley - Never Gonna Give You Up",
  "iurlhq":"https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  "oid":"yZJtHRi2SvzOOKZfbA-GRA",
  "keywords":"VEVO,Sony,together forever,Legacy,Rick Astley VEVO,RickAstleyVEVO,Rick Astley,Rick Roll,Pop,Rick Astley full album,Sony Music,take me to your heart,never gonna give you up,Never Gonna Give You Up,Sony BMG Music UK,Sony Music UK,Rick Astley album,rick astley official,whenever",
  "enablecsi":"1",
  "use_cipher_signature":"True",
  "allow_ratings":"1",
  "token":"vjVQa1PpcFN8uwDYAmeCSt7Hib5ijZp6eLzWI64hVws="
}

const _videoUrlObject = {
  "url":"http://r12---sn-o097zne7.googlevideo.com/videoplayback?nh=IgpwcjAzLnNqYzA3KgkxMjcuMC4wLjE&expire=1458979400&source=youtube&mime=video%2Fmp4&dur=212.834&pl=16&itag=18&initcwndbps=2162500&ipbits=0&sparams=dur%2Cgcr%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cnh%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cupn%2Cexpire&sver=3&ratebypass=yes&upn=8XVxfpULnUo&mm=31&mn=sn-o097zne7&id=o-AO1-5yrRSSZ_UFEkjXI5KrLIC5P8s0HHXxt9uTOh2U-L&mt=1458957708&mv=m&ms=au&key=yt6&ip=73.202.224.7&fexp=9405960%2C9408490%2C9416126%2C9419451%2C9420452%2C9422596%2C9423606%2C9423661%2C9423662%2C9425958%2C9427789%2C9427902%2C9428605%2C9428769%2C9429505%2C9429651%2C9429692%2C9431012%2C9431450%2C9431468%2C9431573%2C9431623%2C9431842%2C9432683%2C9432757&gcr=us&requiressl=yes&lmt=1458217620648254&signature=DC6DA129A24015EAE8F96943929762B7868A81C3C.F91464ED49B3CE9B81B659676AA1E36EE339A",
  "quality":"medium",
  "s":"C6DC6DA129A24015EAE8F96943929762B7868A81C3C.F91464ED49B3CE9B8AB659676AA1E36EE3391BB8",
  "type":"video/mp4; codecs=\"avc1.42001E, mp4a.40.2\"",
  "fallback_host":"tc.v19.cache6.googlevideo.com",
  "itag":"18"
}

describe("youtube", function () {
  it("should pass when video ID can be extracted from url", function () {
    const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    const videoId = youtube.getIdFromUrl(url);
    expect(videoId).to.equal(_videoId);
  });
  it("should pass when video ID can be extracted from url containing ampersand", function () {
    const url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&sns=tw";
    const videoId = youtube.getIdFromUrl(url);
    expect(videoId).to.equal(_videoId);
  });
  it("should pass when YouTube.com returns valid videoInfo structure", function () {
    const videoInfo = youtube.getVideoInfo(_videoId, new XMLHttpRequest());
    // console.log("videoInfo: %j", videoInfo);
    expect(videoInfo).to.not.be.null;
    expect(videoInfo.token).to.not.be.null;
  });

  const videoInfos = [];
  const elTypes = ['&el=info', '&el=embedded', '&el=detailpage', '&el=vevo', ''];
  
  for (const i in elTypes) {
    videoInfos.push(youtube.getVideoInfo(_videoId, new XMLHttpRequest(), elTypes[i]));
  }
  const videoUrlObject = youtube.getVideoUrlObject(videoInfos, "best");
  it("should pass when a valid videoUrlObject is returned", function () {
    // console.log("videoUrlObject: %j", videoUrlObject);
    expect(videoUrlObject).to.not.be.null;
    expect(videoUrlObject.url).to.not.be.null;
    expect(videoUrlObject.token).to.not.be.null;
  });

  if (/requiressl=yes/.test(videoUrlObject.url)) {
    it("should pass when a HTTPS videoUrlObject.url is returned", function () {
      expect(videoUrlObject.url).to.match(/^https:/);;
    });
  } else {
    it("should pass when a HTTP videoUrlObject.url is returned", function () {
      expect(videoUrlObject.url).to.match(/^http:/);;
    });
  }


});
