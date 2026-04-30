import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

type ScheduleItem = {
  date: string;
  topic: string;
  speaker: string;
  confirmed: boolean;
  detail?: {
    title: string;
    speakerFull: string;
    speakerBio: string;
    speakerPhoto: string;
    description: string[];
    registerUrl: string;
    widgetId?: string;
  };
};

const schedule: ScheduleItem[] = [
  {
    date: "11 марта 2026",
    topic: "Зачем психологу психиатрия: как работать с трудными случаями и не оставаться в одиночестве",
    speaker: "Архангельская Наталия Владимировна",
    confirmed: true,
    detail: {
      title: "«Зачем психологу психиатрия: как работать с трудными случаями и не оставаться в одиночестве»",
      speakerFull: "Архангельская Наталия Владимировна",
      speakerBio: "Клинический психолог, гештальт-терапевт, социальный психолог, семейный психолог, преподаватель педагогики и психологии.",
      speakerPhoto: "https://cdn.poehali.dev/projects/5c2d535a-bd60-400c-8b75-58203cc5db1c/bucket/eebaddd1-2c41-4eb6-9571-f7e65d1d01f7.JPG",
      description: [
        "Мы разбираем, как работать с неопределённостью, в каких ситуациях требуется консультация психиатра и как выстроить сотрудничество так, чтобы сохранить контакт с клиентом и не выходить за рамки своих компетенций.",
        "Клинические кейсы. О ориентирах, тревожных симптомах и корректном направлении к психиатру — без постановки диагноза.",
        "Что такое психопатология. Почему на начальном этапе часто невозможно достоверно понять, «что это такое», и как не попасть в ловушку преждевременной уверенности.",
        "Когда стоит обращаться к психиатру: не по «ярлыку», а по риску и динамике.",
        "Как сообщить клиенту о необходимости консультации психиатра, чтобы не усилить стигматизацию и не разрушить альянс.",
      ],
      registerUrl: "#",
      widgetId: "1569437",
    },
  },
  {
    date: "15 апреля 2026",
    topic: "Диагностика, которая лечит: как на первом интервью заложить основу стратегии и запустить изменения",
    speaker: "Степанова Екатерина",
    confirmed: true,
    detail: {
      title: "«Диагностика, которая лечит: как на первом интервью заложить основу стратегии и запустить изменения»",
      speakerFull: "Екатерина Степанова",
      speakerBio: "Практикующий психолог, супервизор Российской Психотерапевтической Ассоциации (РПА), Преподаватель Научно-Образовательного Центра Современных Медицинских Технологий.",
      speakerPhoto: "https://cdn.poehali.dev/projects/5c2d535a-bd60-400c-8b75-58203cc5db1c/bucket/da5563cd-2005-448e-a0a2-7f1f2b01e2cf.jpg",
      description: [
        "Структурное интервью по Кернбергу: Как за сравнительно короткое время первой встречи определить уровень организации личности? На какие три параметра опирался Кернберг в своей диагностике, и как это применимо в ежедневной практике?",
        "Задачи первичной встречи (Мак-Вильямс, Гринсон): Что мы должны успеть сделать на первой сессии помимо сбора жалобы? Как отличить задачу «установить контакт» от задачи «собрать данные» и почему это ложная дилемма?",
        "Четыре портрета на первой сессии: Каким приходит невротик? Как ведёт себя пограничный клиент на первой сессии? Что происходит с реальностью у психотического клиента и как мы это замечаем? И главное — что делать с нарциссическим клиентом, который с порога обесценивает или идеализирует?",
        "Контрперенос как компас: Почему с одним клиентом мы чувствуем усталость и скуку, с другим — тревогу и желание спасать, а с третьим — злость и желание защищаться? Учимся расшифровывать свои реакции как диагностический сигнал.",
        "Работа с агрессией, обесцениванием и идеализацией на старте: Как распознать эти проявления, если они ещё скрыты за социально приемлемыми формами? Почему идеализация терапевта так же опасна, как и явное обесценивание? Как реагировать, не разрушая контакт, но и не позволяя себя разрушить?",
        "Рамка, сеттинг, контейнирование: Как способность терапевта выдерживать аффекты клиента становится главным целительным фактором? Что делать, когда клиент атакует границы, и как самому терапевту оставаться в устойчивой позиции?",
      ],
      registerUrl: "https://course.rosmededucation.ru/profsreda",
    },
  },
  {
    date: "29 апреля 2026",
    topic: "Расширение практики за счёт понимания специфики работы с зависимыми, они же пограничные, клиентами",
    speaker: "Матюхина Елена Юрьевна",
    confirmed: true,
    detail: {
      title: "«Расширение практики за счёт понимания специфики работы с зависимыми, они же пограничные, клиентами»",
      speakerFull: "Матюхина Елена Юрьевна",
      speakerBio: "Гештальт-терапевт, эксперт по работе с зависимостями.",
      speakerPhoto: "https://cdn.poehali.dev/projects/5c2d535a-bd60-400c-8b75-58203cc5db1c/bucket/413f42d4-73fe-4416-adee-28d3ac0548a7.jpg",
      description: [
        "Современный мир становится всё более пограничным, соответственно, и клиенты, приходящие в терапию, также преимущественно погранично устроены. Увеличивается число клиентов с разными формами зависимости, которые также ищут помощи.",
        "Стоит заметить, что все зависимые клиенты погранично устроены, но не все погранично устроенные клиенты являются зависимыми.",
        "Мы рассмотрим специфику работы с зависимыми и пограничными клиентами по отдельности и как единую стратегию.",
        "Рассмотрим, какие бывают зависимые клиенты, кого из них и на каких условиях стоит приглашать в частную практику, а от кого стоит воздержаться.",
        "Рассмотрим виды нехимических зависимостей, доступных для психотерапии в частной практике (такие как трудоголизм, шопоголизм, созависимость, эмоциональная зависимость и игромания).",
        "Рассмотрим основные опоры в работе с зависимыми, погранично устроенными клиентами и основные векторы в терапии.",
      ],
      registerUrl: "#",
    },
  },
  {
    date: "13 мая 2026",
    topic: "Психотерапия панических атак",
    speaker: "Марченко Татьяна",
    confirmed: true,
    detail: {
      title: "Психотерапия панических атак",
      speakerFull: "Марченко Татьяна Владимировна",
      speakerBio: "Клинический психолог, гештальт-терапевт, член РПА.",
      speakerPhoto: "https://cdn.poehali.dev/projects/5c2d535a-bd60-400c-8b75-58203cc5db1c/bucket/e8c8035e-1ebb-4252-86a0-50df21a5f3f1.jpg",
      description: [
        "Панические атаки — одна из самых частых причин обращения: человек приходит с ощущением, что «тело вышло из-под контроля», страхом повторения и избеганием, которое постепенно сужает жизнь. И именно здесь у специалистов чаще всего возникает развилка: что считать панической атакой, как отличать от других состояний, как выстраивать безопасный контакт и как работать так, чтобы терапия не превращалась в бесконечное «успокоение».",
        "На встрече разберём панические атаки как клинический и психологический феномен — без перегруза терминами и с опорой на понятные примеры из практики.",
        "**1) Определение и проявления ПА**\nЧто именно мы называем панической атакой, как она проявляется, по каким признакам её можно распознать. Сложные термины переведём на нормальный язык — через жизненные примеры.",
        "**2) Механизмы возникновения**\nКак накапливающееся напряжение может запускать «приступ». Что становится триггером. Почему человек теряет ощущение контроля над телом и так сильно пугается.",
        "**3) Портрет клиента и пусковые механизмы**\nРазберём типичный профиль клиента, уязвимые места и то, что чаще всего запускает паническую симптоматику.",
        "**4) «Вторичные выгоды» симптома**\nКакие вторичные выгоды встречаются чаще всего — и как аккуратно работать с этой темой, не провоцируя сопротивление и стыд.",
        "**5) Психологическая работа с ПА: логика и схема**\nПошагово разберём, как создавать благоприятную и безопасную атмосферу; как учить распознавать чувства; как формировать навыки справления с психическим напряжением; как работать с вторичной выгодой и помогать клиенту получать желаемое без панических атак.",
        "**Два кейса (успешная динамика)**\nЖенщина, 27 лет: в терапии 3 года, панические атаки ушли спустя 2 года; вышла на работу, поступила на учёбу.\nМужчина, 45 лет: в терапии 4 года; принимал анксиолитики; панические атаки прекратились через год; смог выходить из дома самостоятельно, устроился на новую работу, в медикаментах больше не нуждается.",
      ],
      registerUrl: "#",
    },
  },
  {
    date: "10 июня 2026",
    topic: "Тёмная сторона предназначения психотерапевта: призвание или приговор?",
    speaker: "Карпуль Анна",
    confirmed: true,
    detail: {
      title: "«Тёмная сторона предназначения психотерапевта: призвание или приговор?»",
      speakerFull: "Карпуль Анна Михайловна",
      speakerBio: "Клинический, психоаналитический, кризисный и перинатальный психолог, ДПДГ-специалист, психолог-психотерапевт.",
      speakerPhoto: "https://cdn.poehali.dev/projects/5c2d535a-bd60-400c-8b75-58203cc5db1c/bucket/2d1af6f0-f5cc-4534-90e8-9669b7b928c3.jpg",
      description: [
        "Мы живём в эпоху бума психологии. Профессия терапевта стала модной, но за идеей «помогать людям» нередко скрываются личные мотивы, непроработанные травмы и профессиональные риски.",
        "Этот вебинар — честный разговор о границах профессии: где проходит линия между помощью и эксплуатацией, и как не превратить терапию в пространство отыгрывания собственных конфликтов.",
        "**В программе:**\n• Как отличить призвание от «симулякра» и навязанного образа терапевта\n• Психопатология специалиста: «раненый целитель» и его риски\n• Контрперенос как источник ошибок и злоупотреблений\n• Этические нарушения: от манипуляций до сексуализированных отношений\n• Профессиональные границы и ежедневная самопроверка\n• Роль личной терапии и супервизии в работе специалиста",
        "**Для кого:**\nПсихологи, психотерапевты, психиатры. Супервизоры и преподаватели. Те, кто выбирает профессию и хочет понимать её риски.",
        "**Формат:** теория + клинические примеры + разбор сложных этических ситуаций",
        "**Результат:**\n• Понимание собственных профессиональных рисков\n• Навыки распознавания опасных сигналов в работе\n• Более осознанное выстраивание терапевтических отношений",
      ],
      registerUrl: "#",
    },
  },
  {
    date: "8 июля 2026",
    topic: "Тема уточняется",
    speaker: "Мельник Екатерина",
    confirmed: true,
  },
  {
    date: "12 августа 2026",
    topic: "Контр-перенос как диагностический инструмент в работе психолога с клиентами разной сложности",
    speaker: "Степанова Екатерина",
    confirmed: true,
  },
  {
    date: "9 сентября 2026",
    topic: "Управление разрушением: специфика работы с шоковыми состояниями клиента",
    speaker: "Пекарская Светлана",
    confirmed: true,
  },
  {
    date: "14 октября 2026",
    topic: "Агрессия и безопасность в работе психолога с клиентом",
    speaker: "Чуйкова Марина",
    confirmed: true,
  },
  {
    date: "11 ноября 2026",
    topic: "Тема уточняется",
    speaker: "Митрофанов Сергей",
    confirmed: true,
  },
];

const faqs = [
  {
    q: "Будет ли запись встречи?",
    a: "Да. Запись доступна всем участникам, оплатившим доступ к конкретной встрече. Ссылка приходит после эфира.",
  },
  {
    q: "Если не смогу прийти — запись останется?",
    a: "Да. Запись сохраняется, поэтому вы не потеряете доступ к материалу, даже если не смогли подключиться в прямом эфире.",
  },

  {
    q: "Для какого уровня подготовки подходят встречи?",
    a: "Встречи рассчитаны на практикующих специалистов и студентов старших курсов профильных программ. Базовые понятия не объясняются с нуля — предполагается, что вы уже в теме.",
  },
  {
    q: "Как приходит доступ после оплаты?",
    a: "Сразу после оплаты на указанный email приходит письмо со ссылкой на встречу и инструкцией по подключению.",
  },
  {
    q: "Будут ли разборы кейсов?",
    a: "Да, типовые ситуации разбираются в рамках каждой встречи. Все примеры — обезличенные. Формат образовательный.",
  },
  {
    q: "Какой документ я получу после вебинара?",
    a: "После вебинара Вам будет доступен именной сертификат в личном кабинете о том, что Вы прослушали вебинар на тему встречи — 1,5 часа.",
  },
  {
    q: "Если тема меня заинтересовала и хочется изучить её более углублённо?",
    a: "Мы предоставляем дополнительные материалы и источники, куда вы можете обратиться за более расширенной информацией.",
  },
];

function WidgetIframe({ widgetId }: { widgetId: string }) {
  const [height, setHeight] = useState(120);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const src = `https://course.rosmededucation.ru/pl/lite/widget/widget?id=${widgetId}&ref=${encodeURIComponent(document.referrer)}&loc=${encodeURIComponent(document.location.href)}`;

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.uniqName === '963f78b8436fe8673a128facb48a052cf4845ae5' && e.data?.height) {
        setHeight(e.data.height);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      data-account-id="657567"
      className="688"
      id="e2dbc0fc6bab376ba0ed0b8f505240a6521b1118_688"
      name="688"
      allowFullScreen
      style={{ width: '100%', height: `${height}px`, border: 'none', overflow: 'hidden', display: 'block' }}
    />
  );
}

function WidgetModal({ widgetId, onClose }: { widgetId: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-[#161616] border border-[#f0ede6]/10 shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[#0f0f0f] border border-[#f0ede6]/10 text-[#9a9690] hover:text-[#f0ede6] transition-colors"
        >
          <Icon name="X" size={16} />
        </button>
        <p className="text-sm text-[#9a9690] mb-4">Регистрация на встречу</p>
        <WidgetIframe widgetId={widgetId} />
      </div>
    </div>
  );
}

function EventModal({ item, onClose }: { item: ScheduleItem; onClose: () => void }) {
  const d = item.detail;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#161616] border border-[#f0ede6]/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[#0f0f0f] border border-[#f0ede6]/10 text-[#9a9690] hover:text-[#f0ede6] transition-colors"
        >
          <Icon name="X" size={16} />
        </button>

        <div className="p-6 md:p-8">
          <div className="mb-1 flex items-center gap-3 text-xs tracking-[0.15em] uppercase text-[#9B2242] font-medium">
            <span>{item.date}</span>
            <span className="text-[#4a4845]">·</span>
            <span>19:00 – 20:30</span>
            <span className="text-[#4a4845]">·</span>
            <span>онлайн</span>
          </div>

          <h2 className="font-display text-xl md:text-2xl font-semibold text-[#f0ede6] leading-snug mb-6 mt-2">
            {d ? d.title : item.topic}
          </h2>

          {d ? (
            <>
              <div className="flex items-start gap-5 mb-6 p-5 rounded-2xl bg-[#0f0f0f] border border-[#f0ede6]/10">
                <img
                  src={d.speakerPhoto}
                  alt={d.speakerFull}
                  className="w-20 h-24 object-cover rounded-xl flex-shrink-0 object-top"
                />
                <div>
                  <p className="font-display text-lg font-semibold text-[#f0ede6] leading-snug mb-1">
                    {d.speakerFull}
                  </p>
                  <p className="text-sm text-[#9a9690] leading-relaxed">{d.speakerBio}</p>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {d.description.map((para, i) => {
                  const lines = para.split('\n');
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#9B2242] flex-shrink-0" />
                      <div className="text-[#c8c3bb] text-sm leading-relaxed">
                        {lines.map((line, j) => {
                          const parts = line.split(/\*\*(.+?)\*\*/g);
                          return (
                            <p key={j} className={j > 0 ? 'mt-1' : ''}>
                              {parts.map((part, k) =>
                                k % 2 === 1 ? <strong key={k} className="text-[#f0ede6] font-semibold">{part}</strong> : part
                              )}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

            </>
          ) : (
            <>
              <div className="mb-6 p-5 rounded-2xl bg-[#0f0f0f] border border-[#f0ede6]/10">
                <p className="text-sm text-[#9a9690]">Спикер: <span className="text-[#f0ede6]">{item.speaker}</span></p>
                <p className="text-sm text-[#4a4845] mt-3">Подробная информация о встрече будет опубликована ближе к дате проведения.</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeEvent, setActiveEvent] = useState<ScheduleItem | null>(null);
  const [widgetItemId, setWidgetItemId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f0ede6] font-body">
      {activeEvent?.detail && (
        <EventModal item={activeEvent} onClose={() => setActiveEvent(null)} />
      )}
      {widgetItemId && (
        <WidgetModal widgetId={widgetItemId} onClose={() => setWidgetItemId(null)} />
      )}

      {/* HERO */}
      <section className="relative flex flex-col px-6 py-10 md:px-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#f0ede6 1px, transparent 1px), linear-gradient(90deg, #f0ede6 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-[-120px] right-[-80px] w-[500px] h-[500px] rounded-full bg-[#9B2242] opacity-[0.07] blur-[100px] pointer-events-none" />

        <header className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="font-display text-xl font-semibold tracking-wide text-[#f0ede6]">
              МедОбраз
            </span>
            <p className="text-[11px] text-[#6b6865] mt-1 leading-[1.6]">
              АНО ДПО «НОЦ СМТ» при поддержке<br />
              Союза охраны психического здоровья
            </p>
          </div>
          <p className="font-display text-lg sm:text-2xl font-semibold text-[#f0ede6] tracking-wide sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:text-center sm:whitespace-nowrap">Профессиональная среда по средам</p>
          <a
            href="#schedule"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 border border-[#9B2242]/50 text-[#9B2242] text-sm font-semibold rounded-full hover:bg-[#9B2242] hover:text-white transition-all duration-200 whitespace-nowrap self-start sm:self-auto"
          >
            Расписание
            <Icon name="ChevronRight" size={14} />
          </a>
        </header>

        <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-start gap-8 lg:gap-12 pt-10 md:pt-16 pb-10">
          <div className="flex-1 min-w-0">
            <div className="mb-5 inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#9B2242] font-medium">
              <span className="w-8 h-px bg-[#9B2242]" />
              Профессиональная среда
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] text-[#f0ede6] mb-6 md:mb-8">
              Встречи,<br />
              <em className="not-italic text-[#9B2242]">которые работают</em><br />
              на практику
            </h1>

            <p className="text-[#9a9690] text-base md:text-xl leading-relaxed mb-4">
              Ежемесячная онлайн-встреча для психологов, психотерапевтов, психиатров и клинических психологов. Тема — спикер — разбор ситуаций — ваши вопросы.
            </p>
            <a
              href="https://rpa-msk.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 md:gap-4 px-4 md:px-5 py-3 md:py-4 rounded-2xl border border-[#f0ede6]/10 bg-[#161616] hover:border-[#9B2242]/40 hover:bg-[#1a1a1a] transition-all duration-200 group mt-5 md:mt-6"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl bg-[#9B2242]/15 flex-shrink-0">
                <Icon name="Award" size={18} className="text-[#9B2242]" />
              </div>
              <p className="text-[#9a9690] text-sm md:text-base leading-snug">
                Встречи ведут эксперты <span className="text-[#f0ede6] font-semibold group-hover:text-[#9B2242] transition-colors duration-200">Московского отделения Российской психотерапевтической ассоциации</span>
              </p>
            </a>
          </div>

          <div className="w-full lg:w-[340px] flex-shrink-0 rounded-3xl border border-[#9B2242]/30 bg-[#161616] p-5 md:p-7 lg:mt-[52px]">
            <p className="text-xs tracking-[0.2em] uppercase text-[#9B2242] font-medium mb-5">Доступ</p>
            <div className="mb-6">
              <div className="font-display text-6xl font-semibold text-[#f0ede6] leading-none">500 ₽</div>
              <div className="text-[#9a9690] text-sm mt-2">за одну встречу · без подписки</div>
            </div>
            <ul className="space-y-3 mb-7">
              {[
                { icon: "Video", text: "Участие в онлайн-эфире" },
                { icon: "Play", text: "Запись встречи — доступна 7 дней после эфира" },
                { icon: "MessageCircle", text: "Ответы на вопросы участников" },
                { icon: "FileText", text: "Материалы по теме" },

              ].map(({ icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon name={icon} size={15} className="text-[#9B2242] mt-0.5 flex-shrink-0" />
                  <span className="text-[#9a9690] text-sm leading-snug">{text}</span>
                </li>
              ))}
            </ul>
            <a
              href="#schedule"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#9B2242] text-white font-semibold rounded-2xl hover:bg-[#b82a50] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
            >
              Выбрать встречу
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>
        </div>


      </section>

      {/* ДЛЯ КОГО */}
      <section className="px-6 md:px-16 py-14 border-t border-[#f0ede6]/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9B2242] mb-4 font-medium">Аудитория</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#f0ede6] mb-8 md:mb-14">
            Для кого эти встречи
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "Brain", label: "Практикующие психологи" },
              { icon: "HeartHandshake", label: "Психотерапевты" },
              { icon: "Stethoscope", label: "Психиатры" },
              { icon: "BookOpen", label: "Клинические психологи" },
              { icon: "GraduationCap", label: "Студенты старших курсов профильных программ" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-2xl border border-[#f0ede6]/10 bg-[#161616] hover:border-[#9B2242]/30 transition-colors duration-200"
              >
                <div className="mt-0.5 w-9 h-9 flex items-center justify-center rounded-lg bg-[#9B2242]/10 flex-shrink-0">
                  <Icon name={icon} size={18} className="text-[#9B2242]" />
                </div>
                <span className="text-[#f0ede6] font-medium leading-snug pt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* СТРУКТУРА ВСТРЕЧИ */}
      <section className="px-6 md:px-16 py-14 bg-[#131313] border-t border-[#f0ede6]/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9B2242] mb-4 font-medium">Формат</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#f0ede6] mb-8 md:mb-14">
            Что будет на встрече
          </h2>
          <div className="space-y-6 md:space-y-8">
            {[
              {
                time: "10 мин",
                title: "Рамка темы и фокус встречи",
                desc: "Спикер обозначает контекст, ставит вопрос, с которым будет работать встреча.",
              },
              {
                time: "25 мин",
                title: "Ключевая логика и опоры для решений",
                desc: "Концептуальный разбор темы: модели, диагностические ориентиры, клинические опоры.",
              },
              {
                time: "15 мин",
                title: "Типовые ситуации и примеры",
                desc: "Разбор обезличенных случаев. Акцент на том, где специалисты чаще всего ошибаются.",
              },
              {
                time: "15–25 мин",
                title: "Вопросы участников",
                desc: "Живой диалог со спикером. Можно задать вопрос в эфире или прислать заранее.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 md:gap-10">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full border border-[#9B2242]/40 text-[#9B2242] text-xs font-semibold">
                    {i + 1}
                  </div>
                  {i < 3 && <div className="w-px flex-1 bg-[#f0ede6]/10 mt-2" />}
                </div>
                <div className="flex-1 pb-6 md:pb-8 last:pb-0">
                  <span className="text-[#9B2242] text-xs font-medium">{item.time}</span>
                  <h3 className="font-display text-xl md:text-2xl font-semibold text-[#f0ede6] mb-1 mt-0.5">{item.title}</h3>
                  <p className="text-[#9a9690] leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ЧТО ВЫ ПОЛУЧИТЕ */}
      <section className="px-6 md:px-16 py-14 border-t border-[#f0ede6]/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9B2242] mb-4 font-medium">Результат</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#f0ede6] mb-8 md:mb-14">
            Что вы получите
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: "Video",
                title: "Запись встречи",
                desc: "Доступна всем участникам после эфира. Можно пересматривать в удобное время.",
              },
              {
                icon: "MessageCircle",
                title: "Ответы на вопросы",
                desc: "Вопросы можно задать в эфире или прислать заранее — спикер отвечает в рамках встречи.",
              },
              {
                icon: "AlertCircle",
                title: "Разбор типичных ошибок",
                desc: "Каждая встреча включает анализ ситуаций, где специалисты чаще всего теряют ориентир.",
              },
              {
                icon: "Link",
                title: "Маршрут продолжения",
                desc: "Тема заинтересовала? После встречи вы найдёте ссылку на соответствующий курс МЕД-ОБРАЗ для углублённого изучения.",
              },
              {
                icon: "Users",
                title: "Профессиональный контекст",
                desc: "Живое общение со спикером и другими участниками — в рамках образовательного формата.",
              },
              {
                icon: "FileText",
                title: "Материалы по теме",
                desc: "Ссылки и дополнительные материалы — по теме встречи, если предусмотрено.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-[#f0ede6]/10 bg-[#161616] hover:bg-[#1a1a1a] transition-colors duration-200"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#9B2242]/10 mb-4">
                  <Icon name={item.icon} size={20} className="text-[#9B2242]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-[#f0ede6] mb-2">{item.title}</h3>
                <p className="text-[#9a9690] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* РАСПИСАНИЕ */}
      <section id="schedule" className="px-6 md:px-16 py-14 bg-[#131313] border-t border-[#f0ede6]/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9B2242] mb-4 font-medium">Расписание</p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8 md:mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#f0ede6]">
              Встречи 2026 года
            </h2>
            <a
              href="https://course.rosmededucation.ru/profsreda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#9B2242] text-white font-semibold rounded-2xl hover:bg-[#b82a50] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] whitespace-nowrap flex-shrink-0"
            >
              Зарегистрироваться
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>
          <div className="space-y-3">
            {schedule.map((item, i) => (
              <div
                key={i}
                onClick={() => item.confirmed && setActiveEvent(item)}
                className={`group flex flex-col gap-4 p-4 md:p-6 rounded-2xl border border-[#f0ede6]/10 bg-[#0f0f0f] hover:border-[#9B2242]/30 transition-all duration-200 ${item.confirmed ? "cursor-pointer hover:bg-[#141414]" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-shrink-0">
                    <div className="font-display text-2xl font-semibold text-[#f0ede6] leading-none">
                      {item.date.split(" ")[0]}
                    </div>
                    <div className="text-sm text-[#9a9690] mt-0.5">
                      {item.date.split(" ").slice(1).join(" ")}
                    </div>
                    <div className="mt-1.5 flex items-center gap-2">
                      <span className="text-xs text-[#9B2242] font-medium">онлайн</span>
                      <span className="text-xs text-[#4a4845]">·</span>
                      <span className="text-xs text-[#9a9690]">19:00 – 20:30</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {item.confirmed ? (
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 border border-[#9B2242]/50 text-[#9B2242] text-xs font-semibold rounded-full group-hover:bg-[#9B2242] group-hover:text-white transition-all duration-200">
                        Подробнее
                        <Icon name="ChevronRight" size={12} />
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-3 py-1.5 border border-[#f0ede6]/15 text-[#4a4845] text-xs rounded-full">
                        Скоро
                      </span>
                    )}
                  </div>
                </div>
                <div className="border-t border-[#f0ede6]/10 pt-3">
                  <p className={`font-medium leading-snug text-sm md:text-base ${!item.confirmed ? "text-[#9a9690] italic" : "text-[#f0ede6]"}`}>
                    {item.topic}
                  </p>
                  <p className="text-sm text-[#9a9690] mt-1">{item.speaker}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ */}
      <section className="px-6 md:px-16 py-14 border-t border-[#f0ede6]/10">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.2em] uppercase text-[#9B2242] mb-4 font-medium">Вопросы</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#f0ede6] mb-8 md:mb-14">
            Часто спрашивают
          </h2>
          <div className="space-y-2">
            {faqs.map((item, i) => (
              <div key={i} className="border border-[#f0ede6]/10 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#161616] transition-colors duration-150"
                >
                  <span className="font-medium text-[#f0ede6]">{item.q}</span>
                  <Icon
                    name={openFaq === i ? "Minus" : "Plus"}
                    size={18}
                    className="flex-shrink-0 text-[#9B2242]"
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-[#9a9690] leading-relaxed text-sm border-t border-[#f0ede6]/10 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FOOTER */}


    </div>
  );
}