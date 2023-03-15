import { reactive, ref } from 'vue'

const url = ref('/img/portfolio/extras/')

const portfolioExtras = reactive([
  {
    text: `Zander Insurance`,
    imageUrl: `zander.png`,
    imageSrc: `zander_sm@2x.png`,
  },
  {
    text: `A Service Request page`,
    imageUrl: `serviceRequestV1.png`,
    imageSrc: `service-request@2x.png`,
  },
  {
    text: `JPay.com multipage PDF`,
    imageUrl: `jpay_com_ui_email_v64.pdf`,
    imageSrc: `jpay-email@2x.png`,
  },
  {
    text: `Multi-page JPay Mobile interface pdf`,
    imageUrl: `JP4_ui_v4.pdf`,
    imageSrc: `jp4-device-music@2x.png`,
  },
  {
    text: `Bridge Admin Business Analysis`,
    imageUrl: `Bridge_Program.png`,
    imageSrc: `bridge-analysis@2x.png`,
  },
  {
    text: `Civic Inc - Axure Wireframe`,
    imageUrl: `Axure-Bridge-Info-TDOT.png`,
    imageSrc: `axure-bridge@2x.png`,
  },
  {
    text: `JPay Kiosk Email screens`,
    imageUrl: `jpay_kiosk_emessages_v18.pdf`,
    imageSrc: `jpay-kiosk-email@2x.png`,
  },
  {
    text: `JPay Kiosk Music screens`,
    imageUrl: `Jpay_kiosk_music_v18b.pdf`,
    imageSrc: `jpay-kiosk-music@2x.png`,
  },
  {
    text: `Mobile Lottery interface, interactive pdf`,
    imageUrl: `mlotto_app.pdf`,
    imageSrc: `mlotto_app.pdf`,
  },
  {
    text: `JPay Extras: Web, Mobile, Corp ID, Print Ads, Newsletters, Brochures, Package Design, PDF forms, Kiosk Design, Murals`,
    imageUrl: `JPay_Extras.pdf`,
    imageSrc: `JPay_Extras@2x.png`,
  },
])

export default { portfolioExtras }
