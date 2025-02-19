import Header from './components/Header';
import PostPreview from './components/PostPreview';
import WordFilter from './components/WordFilter';
import ReplySettings from './components/ReplySettings';
import MediaSelection from './components/MediaSelection';
import NextButton from './components/NextButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white max-w-md mx-auto font-jakarta">
      <Header />
      
      <main className="px-6">
        <PostPreview />
        <WordFilter />
        <ReplySettings />
        <MediaSelection />
        <NextButton />
      </main>
    </div>
  );
}
