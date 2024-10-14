// This is a static page mocking an "About Us" section for our fake user data
import React from 'react';

export default function AboutPage() {
  return (
    <div className="container pt-4">
      <section className="features-icons bg-light text-center m-4">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-window m-auto text-primary" />
                </div>
                <img src = "src/assets/images/IMG_7554.jpeg" alt = "placeholder" className="img-fluid" style={{ width: '270px', height: '270px', borderRadius: '90px' }} />
                <h3></h3>
                <p className="lead mb-0" 
                >
                  
                  
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-layers m-auto text-primary" />
                </div>
                <h3>About Me</h3>
                <p className="lead mb-0">
                  I am currently a student in the University of Denver full
                  stack coding bootcamp. After graduating from the University of
                  Colorado at Boulder with a degree in Molecular, Cellular, and
                  Developmental Biology, I started my professional career
                  working in Autoimmune research. I have always had a love for
                  the tech industry and recently decided that this is how I
                  would like to spend the rest of my professional career. I love all things Colorado, including skiing, trail running, and getting up to the mountains whenever I have an opportunity. I am excited to see where this new career path takes me..
                </p>
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-terminal m-auto text-primary" />
                </div>
                <h3>Easy to Use</h3>
                <p className="lead mb-0">
                  Ready to use with your own content, or customize the source
                  files!
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <p>
        
      </p>
    </div>
  );
}
