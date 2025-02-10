import React, { useEffect /* , useState, useRef */ } from 'react';
import '../styles/styles.less';

function Footer() {
  useEffect(() => {
    if (document.querySelector('.title_container .unctad_logo img')) {
      document.querySelector('.title_container .unctad_logo img').src = '/themes/custom/newyork_b5/images/logo_small_white_en.png';
    }
  }, []);

  return (
    <div className="app" id="app_footer_fr">
      <div className="footer_container">
        <h2>Que voulez-vous faire ensuite ?</h2>
        <div className="footer_elements">
          <div className="footer_element footer_element_1">
            <div className="footer_content anchor_videos hidden" id="anchor_videos">
              <h3>Regardez les vidéos</h3>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/PLzwchtLJSk" title="Rapport 2024 sur le développement économique en Afrique" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <ul>
                <li>
                  <a href="https://youtu.be/4AFRNSPniqM" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="https://youtu.be/sJ-wxXwmSlg" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="https://youtu.be/FTeIOjzp-n0" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="https://youtu.be/1g-ia7rZUEs" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <a href="https://youtu.be/wBrYD3gfPRc" target="_blank" rel="noreferrer">Русский</a>
                  {', '}
                  <a href="https://youtu.be/oLIUDxnL3hg" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="https://youtu.be/qzywOEqyvwI" target="_blank" rel="noreferrer">Kiswahili</a>
                  {', '}
                  <a href="https://youtu.be/hmkbO7Z2kVs" target="_blank" rel="noreferrer">Urdu اردو</a>
                  {', '}
                  <a href="https://youtu.be/IxnQGmlbXGw" target="_blank" rel="noreferrer">Hindi हिंदी</a>
                  {', '}
                  <a href="https://youtu.be/siCd0BVBh_c" target="_blank" rel="noreferrer">Deutsch</a>
                </li>
              </ul>
              <h4>Télécharger la vidéo du rapport</h4>
              <ul>
                <li>
                  <a href="https://vimeo.com/1022047383" target="_blank" rel="noreferrer">English</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/671bbf397473e9673f6787b6/download/RMT_French.mp4" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717cbe5ba1d4adf22b43d40/download/RMT_Spanish.mp4" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717cc0713e9a0526177d065/download/RMT_Arabic.mp4" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717cbf14fef798388c7b1e8/download/RMT_Chinese.mp4" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717f4408702f714aec05406/download/RMT_Russian.mp4" target="_blank" rel="noreferrer">Русский</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717f4627791536fa678c968/download/RMT_Portuguese.mp44" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717f46dd04095240ee8e7ee/download/RMT_Kiswahili.mp4" target="_blank" rel="noreferrer">Kiswahili</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717f478e550b873467fcd57/download/RMT_Urdu.mp4" target="_blank" rel="noreferrer">Urdu اردو</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717f4577bf03fefc8ffb06b/download/RMT_Hindi.mp4" target="_blank" rel="noreferrer">Hindi हिंदी</a>
                  {', '}
                  <a href="https://trello.com/1/cards/66ea989dbf21c10916cdffb1/attachments/6717f44b00de797a3f7d0fd3/download/RMT_German.mp4" target="_blank" rel="noreferrer">Deutsch</a>
                </li>
              </ul>
              <h4>Regardez la conférence de presse</h4>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/AYD39tO7VGM" title="Conférence de presse du Rapport 2024 sur le développement économique en Afrique" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <h4>Ressources médias</h4>
              <ul>
                <li>
                  <a href="https://vimeo.com/1022207903" target="_blank" rel="noreferrer">Conférence de presse</a>
                </li>
                <li>
                  <a href="https://www.flickr.com/photos/unctad/albums/72177720321427679" target="_blank" rel="noreferrer">Photos</a>
                </li>
                <li>
                  <a href="https://www.unognewsroom.org/story/en/2395/unctad-press-conference-22-october-2024" target="_blank" rel="noreferrer">Audio et autres ressources</a>
                </li>
              </ul>
            </div>
            <div className="footer_content anchor_podcasts" id="anchor_podcasts">
              <h3>Podcasts</h3>
              <p>Écoutez l’épisode de The Weekly Tradecast qui explore les thématiques du rapport</p>
              <div className="iframe_container">
                <iframe title="131. Rapport de l’ONU : libérer le potentiel commercial de l’Afrique" height="150" width="100%" style={{ border: 'none', minWidth: 'min(100%, 430px)' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=e79c8-17eacbf-pb&btn-skin=009EDB&download=1&font-color=000000&fonts=Verdana&from=pb6admin&logo_link=none&rtl=0&share=1&size=240&skin=ffffff" allowFullScreen />
                <span className="text"><a href="/fr/podcast/rapport-de-lonu-liberer-le-potentiel-commercial-de-lafrique">Rapport de l’ONU : libérer le potentiel commercial de l’Afrique</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
