import './FeedbackOptions.css';

export default function FeedbackOptions({ options }) {
  return (
    <div>
      <button type="button" onClick={() => options('good')}>
        Хорошо
      </button>

      <button type="button" onClick={() => options('neutral')}>
        Нейтрально
      </button>

      <button type="button" onClick={() => options('bad')}>
        Плохо
      </button>
    </div>
  );
}
