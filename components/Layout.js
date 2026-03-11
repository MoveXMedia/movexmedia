import Nav from './Nav';
import Footer from './Footer';
import StarField from './StarField';

export default function Layout({ children }) {
  return (
    <>
      <StarField />
      {/* Ambient glow orbs */}
      <div className="glow-orb" style={{
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(74,158,218,0.08) 0%, transparent 70%)',
        top: '-200px',
        right: '-200px',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <div className="glow-orb" style={{
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(91,196,245,0.06) 0%, transparent 70%)',
        bottom: '20%',
        left: '-100px',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <Nav />
      <div className="page-content">
        {children}
      </div>
      <Footer />
    </>
  );
}
