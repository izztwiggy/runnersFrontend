import Image from 'react-bootstrap/Image'
import logo from '../../images/icons/alt_runcoLogo.png'

const About = () => {
  return (
    <>
    <div style={{backgroundColor:'#FFF9F5', marginBottom: 0}}>
      <Image src={logo} className='rounded-circle' style={{maxHeight:'15rem'}}/>
      <h4><blockquote>Building Friendships that go the distance</blockquote></h4>
      <p>We are inspiring friendships through inspired love and joy of running.<br/>Are you Training for your 1st, 5th, or even 50th Marathon? Reconnecting with your body in way to honor it? Running, walking, and even just moving can be so joyous, through is building relationships, and community within a group of people that share your joy. Meet new people to mix up your training, push you harder, get to that next light post, or just keep you company as you get out to move your bodies in a kind and joyful way. Gain a new Training Partner, or Running Buddy, wins all around.</p>
      <p>We want to live our best lifes, within a community of support</p>
      <Image src={logo} className='rounded-circle' style={{maxHeight:'15rem'}}/>
    </div>
  </>
  )
}

export default About