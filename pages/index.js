import {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

import styles from './style.styl';

const stores = [
  {
    link: 'https://ridero.ru/books/istorii_chetyryokh_okeanov/',
    title: 'Ridero'
  },
  {
    link: 'https://www.ozon.ru/context/detail/id/144434337/',
    title: 'Ozon'
  },
  {
    link: 'https://www.amazon.com/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D0%B8-%D1%87%D0%B5%D1%82%D1%8B%D1%80%D1%91%D1%85-%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D0%BE%D0%B2-%D0%A2%D0%BA%D0%B0%D1%87%D0%B5%D0%BD%D0%BA%D0%BE-%D0%90%D0%BD%D0%BD%D0%B5%D1%82%D0%B0-ebook/dp/B079YYLLRL',
    title: 'Amazon'
  },
  {
    link: 'https://www.litres.ru/anneta-igorevna-tkachenko/istorii-chetyreh-okeanov/?utm_medium=cpc&utm_source=google&utm_campaign=Tovarnaya1%7C184350330&utm_term=&utm_content=k50id%7Cpla-353596323111%7Ccid%7C184350330%7Caid%7C43672117890%7Cgid%7C9065790330%7Cpos%7C1o1%7Csrc%7Cg_%7Cdvc%7Cc%7Creg%7C9047027%7Crin%7C%7C&k50id=9065790330%7Cpla-353596323111&gclid=Cj0KCQjw-JvaBRDGARIsAFjqkkqroedol4Df5C60GwOnIlbVeETAfcv_MOBLGOes51LuAhbeNsnotBAaAkQGEALw_wcB',
    title: 'ЛитРес'
  },
  {
    link: 'https://da.bookmate.com/books/V75fCljt?variti_referrer=https%3a%2f%2fwww.google.ru%2f&fa821dba_ipp_uid2=mRIbNslMMh1raG0q%2fC7FAtNbMlzqJe%2bUY4MeZIA%3d%3d&fa821dba_ipp_uid1=1531426791336&fa821dba_ipp_key=1531426791336%2FGTvrAZoCOL%2bwA1h0zpv0nQ%3d%3d',
    title: 'Bookmate'
  }
];

class App extends Component {
  state = {
    modalOpened: false
  };

  toggleModal = () => {
    const {modalOpened} = this.state;

    this.setState({modalOpened: !modalOpened});
  };

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.menu}>
          <div className={styles.menuContent}>
            <div className={styles.slug}>
              Это истории четырех отношений, судьбы четырех женщин и их борьбы за любовь
            </div>

            <div className={styles.slug_mobile}>
              Истории четырёх океанов
            </div>

            <Button
              bsStyle="info"
              bsSize="small"
              className={styles.buyButton}
              onClick={this.toggleModal}
            >
            <span className={styles.buyText_mobile}>
              <img
                className={styles.buyTextIcon}
                src="/static/basket.svg"
              />
            </span>
              <span className={styles.buyText}>Купить книгу</span>
            </Button>
          </div>
        </div>

        <img
          className={styles.cover}
          src="/static/cover.png"
        />

        <div>
          <h2 className={styles.title}>
            Немного о книге.
          </h2>

          <div className={styles.description}>
            <p className={styles.descriptionParagraph}>
              «Истории четырёх океанов» — это истории четырех отношений, судьбы четырех женщин и их борьбы за любовь.
              Четыре выбора, четыре долгих пути к своему единственному, четыре истории о том, что счастье есть.
              И хоть название каждой главы это женское имя - у героинь романа нет имен, чтобы любая читательница могла
              увидеть себя в одной из четырех женщин.
            </p>

            <p className={styles.descriptionParagraph}>
              В первой главе «Евангелина» рассказывается о том, как зарождается любовь из дружбы. Как она переживает
              время и расстояния, чувства предательства и искушения в одних отношениях, сомнения в новых, встречает свою
              первую сильную любовью и стоит перед сложным выбором - открыть ли своё сердце снова.
            </p>

            <p className={styles.descriptionParagraph}>
              Во второй главе «Стефания» после десятилетнего брака героиня встречает человека, который перевернет её
              жизнь
              с ног на голову. А случайное стечение обстоятельств поставит перед ней нелегкий выбор: спасти жизнь
              любимому
              и разрушить семью, в которой есть двое детей, рискнуть всем ради счастья или навсегда похоронить в себе
              чувства, смириться и остаться с мужем и сохранить видимость «нормальной семьи», вспоминая счастливые дни.
            </p>

            <p className={styles.descriptionParagraph}>
              В третьей главе «Александра» — история мучительных и длинных отношений без развития. В день, когда героиня
              узнает о свадьбе она знакомится с новым парнем. Её прошлое и настоящее буквально сталкиваются на пороге
              квартиры. И только ей решать какое будущее её ждёт.
            </p>

            <p className={styles.descriptionParagraph}>
              В четвертой главе «Мария» главная героиня влюблена в своего будущего мужа еще со школьной скамьи.
              Они вместе уже около 15 лет и прошли не один кризис, расставания, измену. В день, когда муж готов уйти
              от неё к другой, он обнаруживает жену без сознания.
            </p>
          </div>

          <div className={styles.storeLinks}>
            {stores.map(({link, title}) => (
              <a
                href={link}
                key={title}
                target="_blank"
                className={styles.storeLink}
              >
                {title}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.author}>
          <div className={styles.authorContent}>
            <img
              src="/static/anneta.jpg"
              className={styles.authorImage}
            />

            <h2 className={styles.title}>
              Немного обо мне.
            </h2>

            <p className={styles.authorDescription}>
              Я начинающий автор, кто так сильно скучал по морю, что оно само пришло ко мне.
              Вылилось строчками на бумагу, спутало ветром волосы и обдало легким бризом.
              Вытаскиваю из памяти самые красивые крымские закаты, чтоб написать новую строку
              и закрыв глаза слушаю звук прибоя. Я влюблена и я романтик. Верю, что счастье ждёт каждого из нас,
              но мы проходим разный путь к нему. Теряемся в пучине обстоятельств и идём ко дну от давления и глубины.
              Но в каждом из нас есть природная сила, сила стихии, сила, которая способна пережить любой шторм,
              словить свою волну и  обрести счастье!
            </p>


          </div>
        </div>

        <footer className={styles.footer}>
          <a
            href="https://www.instagram.com/karapyziki"
            target="_blank"
            className={styles.footerLink}
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/anneta.tkachenko.9"
            target="_blank"
            className={styles.footerLink}
          >
            Facebook
          </a>

          <a
            href="https://vk.com/manneta"
            target="_blank"
            className={styles.footerLink}
          >
            Вконтакте
          </a>
        </footer>

        <Modal
          backdrop
          show={this.state.modalOpened}
          onHide={this.toggleModal}
        >
          <Modal.Body>
            <div className={styles.modalStoreLinks}>
              {stores.map(({link, title}) => (
                <a
                  href={link}
                  key={title}
                  target="_blank"
                  className={styles.modalStoreLink}
                >
                  {title}
                </a>
              ))}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default App;
