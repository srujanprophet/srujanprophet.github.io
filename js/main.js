const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const edu = document.querySelector('#education')
const exp = document.querySelector('#experience')
const iitb = document.querySelector('#iitb')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const eduContent = document.querySelector('#edu-content')
const expContent = document.querySelector('#exp-content')
const iitbContent = document.querySelector('#iitb-content')

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Me',
        width: '400px',
        height: '400px',
        top: 20,
        right: 20,
        bottom: 0,
        left: 20,
        mount: aboutContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        }
    })
})

contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Contact Me',
        width: '400px',
        height: '400px',
        top: 50,
        right: 25,
        bottom: 0,
        left: 125,
        mount: contactContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        }
    })
})

edu.addEventListener('click', () => {
    const eduBox = new WinBox({
        title: 'Education',
        //modal: true,
        width: '400px',
        height: '450px',
        top: 60,
        right: 35,
        bottom: 0,
        left: 135,
        mount: eduContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        }
    })
})

exp.addEventListener('click', () => {
    const expBox = new WinBox({
        title: 'Experience',
        //modal: true,
        width: '400px',
        height: '400px',
        top: 60,
        right: 35,
        bottom: 0,
        left: 135,
        mount: expContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        }
    })
})

iitb.addEventListener('click', () => {
    const iitbBox = new WinBox({
        title: 'IIT-Bombay',
        //modal: true,
        x: "center",
        y: "center",
        width: "45%",
        height: "45%",
        mount: iitbContent,
        onfocus: function () {
            this.setBackground('#00aa00')
        },
        onblur: function () {
            this.setBackground('#777')
        }
    })
    setTimeout(() => iitbBox.show().focus(), 0)
})