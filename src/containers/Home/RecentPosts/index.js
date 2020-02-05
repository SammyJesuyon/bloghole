import React from 'react';
import Card from '../../../components/UI/Card';
import './style.css'

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px',
                        marginTop: '0px',
                        marginLeft: '0px'
                    }}>
            <div className="postImageWrapper center">
                <img src={"https://2.bp.blogspot.com/-ZOY5OAvnKj0/V9_M3_TVTLI/AAAAAAAAD40/UQl4rIoqgi42zaeq0yR_y1gnnchZFxupQCLcB/s1600/3-3.jpg"} alt=""/>
            </div>

              <div className = "postImageText" style={{textAlign: 'center'}}>

                <span>Featured</span>
          <h2>Nec Ipsum tincidunt nam cubilia</h2>
                <span>posted on July 40, 2020 by BlogHole</span>
          <p>Nec Ipsum tincidunt nam cubilia. Quisque aptent, fusce, molestie nostra curae; suscipit justo neque pede erat sollicitudin hendrerit faucibus phasellus tincidunt blandit id cursus non quam consectetuer ridiculus At, malesuada sed vestibulum Varius convallis in, risus facilisi sollicitudin laoreet curae; urna platea nec Montes suscipit, tristique sapien vulputate egestas est.\n\nLacus pretium. Vulputate sed penatibus commodo. Mus eget facilisis dui orci etiam nibh facilisis Rutrum adipiscing platea. Torquent pulvinar quam. Diam ante dignissim tincidunt proin curae; nulla nisi. Facilisi...</p>

                <button>Read More</button>     

            </div>

            


        </Card>
    </div>
   )

 }

export default RecentPosts