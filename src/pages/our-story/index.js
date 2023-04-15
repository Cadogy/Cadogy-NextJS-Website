import React, { useEffect } from "react";
import HousePaw from '../../../public/house-paw.svg'
import { ToastContainer, toast } from 'react-toastify';
import { FloatingBanner, Navigation, Footer } from "@/components";

const teamMembers = [
  {
    fullName: "Charles Knapp",
    personImage: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
    position: "Chief Technology Officer / Software Engineer",
    cardBio: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    gitLink: "https://github.com/charlesknapp",
    twitterLink: "",
    instaLink: "",
  },
  {
    fullName: "Dylan Safra",
    personImage: "https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif",
    position: "Chief Financial Officer / Software Engineer",
    cardBio: "The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.",
    gitLink: "https://github.com/interborn",
    twitterLink: "",
    instaLink: "",
  },
  {
    fullName: "Random Person",
    personImage: "https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif",
    position: "Web3 Director / Software Engineer",
    cardBio: "Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.",
    gitLink: "",
    twitterLink: "",
    instaLink: "",
  },
  {
    fullName: "Random Person",
    personImage: "https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg",
    position: "Director of Marketing / Software Engineer",
    cardBio: "An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field.",
    gitLink: "",
    twitterLink: "",
    instaLink: "",
  },
  {
    fullName: "Random Person",
    personImage: "https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg",
    position: "Search Engine Director / Software Engineer",
    cardBio: "Ranking genuis, with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.",
    gitLink: "",
    twitterLink: "",
    instaLink: "",
  },
  {
    fullName: "Random Person",
    personImage: "https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif",
    position: "Head of Design / Software Engineer",
    cardBio: "A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.",
    gitLink: "https://github.com/",
    twitterLink: "",
    instaLink: "",
  },
];

const officeAnimals = [
  {
    animalName: "Rouge",
    animalImage: "https://www.pupvine.com/wp-content/uploads/2021/09/German-Shepherd-Lab-Mix-The-Two-Most-Popular-Dogs-In-One-2.jpg",
    favoriteToy: "Deer Antlers",
  },
  {
    animalName: "Animal 2",
    animalImage: "https://felineengineering.com/wp-content/uploads/2018/11/Cat-Playing-with-String-e1542344016425.jpg",
    favoriteToy: "Stuffed Animals",
  },
  {
    animalName: "Animal 3",
    animalImage: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2022-08/220805-border-collie-play-mn-1100-82d2f1.jpg",
    favoriteToy: "The Furniture",
  },
]

// const collectSound = new Audio(CollectSound);
const Stickers = [
  {
    stickerName: `Mighty Warlock`,
    stickerIcon: '🧙',
  },
]

const wizardToastMessage = () => {
  {Stickers.map((sticker) => (
  toast(`${sticker.stickerIcon} Collected: ${sticker.stickerName}`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })
  ))};

  document.getElementById("stickerToast").style.fontWeight = "bold";
  hideWizard();
};

const hideWizard = () => {
//   collectSound.play();
//   collectSound.volume = 0.5;
  document.getElementById("wizardSticker").style.cssText= "opacity: 0; visibility: hidden; transition: visibility 0s 0.4s, opacity 0.4s linear;";
}

{/* ================================================== */}

const Story = () => {

  {/* PAGE TITLE */}
  useEffect(() => {
    document.title = "Cadogy - Our Story";  
  }, []);

    return (
        <div>
            <FloatingBanner />
            <Navigation />
            <div className="2xl:container 2xl:mx-auto lg:px-20 pb-24 px-4">

            {/* HEADER SECTION */}

                <div className="flex flex-col lg:flex-row justify-between gap-16 pt-8">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="inline-flex items-center text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">We're Digital Wizards</h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">
                        Introducing <b className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Cadogy</b>, a troupe of masterful web developers who possess the arcane knowledge necessary to cast a spell of high-quality and innovative web solutions. We are a coven of professionals, sworn to assist businesses and individuals in breathing life into their online visions.
                        </p>
                        <br />
                        <p className="font-normal text-base leading-6 text-gray-600 ">
                        Our ensemble includes seasoned developers, designers, and project managers, each with a wealth of experience in conjuring websites and web applications of every magnitude and intricacy. Our passion for enchantment knows no bounds, and we delight in creating websites that are both aesthetically pleasing and user-friendly, providing a positive experience for all who behold them.
                        </p>
                    </div>
                    <div className="w-full lg:w-8/12 rounded-2xl">
                        <img className="w-full h-full rounded-2xl" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People"></img>
                        <img onClick={wizardToastMessage} id="wizardSticker" className="hidden lg:flex hover:rotate-1 hover:scale-[1.03] transition-[0.3] cursor-[pointer] top-[51%] left-[40%] absolute rendering-pixelated ml-4 h-[auto] max-w-[128px]" src="https://cdna.artstation.com/p/assets/images/images/020/833/710/original/francesco-montibello-gandalf-1.gif?1569345311"></img>
                        <div id="stickerToast">
                        <ToastContainer
                            position="bottom-right"
                            autoClose={5000}
                            hideProgressBar
                            newestOnTop={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />                      
                        </div>

                    </div>
                </div>

                {/* CTA SECTION */}

                <div className="xl:px-20 px-6 pt-10 pb-10 xl:mx-auto xl:container">
                    <h1 className="mt-16 xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
                    Web Services Across the Globe
                    </h1>
                    <p className="text-center mt-6 font-normal text-base leading-6 text-gray-600 ">
                    We understand that in this fast-paced digital world, a robust online presence is vital to the success of any enterprise. That is why we work closely with our clients, using our wizardry to understand their needs and goals, and to deliver custom solutions tailored to their specific desires. Our objective is to help our clients achieve their online aspirations, be it to increase sales, enhance customer engagement, or establish a commanding online brand.
                    </p>
                    <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                        <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map image" className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden" />
                        <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="mobile-image" className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0" />
                        <div className="hover:shadow-2xl hover:-skew-y-2 hover:scale-[1.15] transition-[0.3] rounded-2xl shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                            <p className="text-3xl font-semibold text-gray-800">1.5M+</p>
                            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Total Blocked Web Security Threats</p>
                        </div>
                        <div className="hover:shadow-2xl hover:skew-y-0 hover:scale-[1.15] transition-[0.3] rounded-2xl shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                            <p className="text-3xl font-semibold text-gray-800">30,000+</p>
                            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Paying Customer Conversions</p>
                        </div>
                        <div className="hover:shadow-2xl hover:skew-y-2 hover:scale-[1.15] transition-[0.3] rounded-2xl shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                            <p className="text-3xl font-semibold text-gray-800">15K+</p>
                            <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently Sold Lands</p>
                        </div>
                    </div>
                </div>

                {/* TEAM SECTION */}
                <div>
                <div className="container flex justify-center mx-auto pt-16">
                    <div>
                        <h1 className="mb-6 xl:text-4xl text-3xl text-center text-gray-800 font-bold mx-auto">Our Passionate Web Developers</h1>
                        <p className="text-center mb-6 font-normal text-base leading-6 text-gray-600 mx-auto max-w-[70%]">
                        Our team believes that web development is more than just a job; it's a calling.<br />That's why we are dedicated to using our skills and expertise to help businesses and individuals achieve their online goals and to create a better, more connected world through the power of the web.
                        </p>
                    </div>
                </div>
                <div className="pb-[0.1rem] md:pb-0 w-full bg-gray-100 px-10 pt-10 rounded-2xl">
                <div className="container mx-auto">
                    <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                {/* TEAM DATA */}
                {teamMembers.map((teamMember) => (
                            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div className="rounded-2xl overflow-hidden shadow-md bg-white">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img src={teamMember.personImage} alt={teamMember.fullName} className="rounded-2xl object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div className="px-6 mt-16">
                                    <div className="font-bold text-3xl text-center pb-1">{teamMember.fullName}</div>
                                    <p className="text-gray-800 text-sm text-center">{teamMember.position}</p>
                                    <p className="text-center text-gray-600 text-base pt-3 font-normal">{teamMember.cardBio}</p>
                                    <div className="w-full flex justify-center pt-5 pb-5">
                                        <a href={teamMember.gitLink} target="_blank" className="mx-5">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                </svg>
                                            </div>
                                        </a>
                                        <a href={teamMember.twitterLink} target="_blank" className="mx-5">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                </svg>
                                            </div>
                                        </a>
                                        <a href={teamMember.instaLink} target="_blank" className="mx-5">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))}
                    </div>
                </div>
                </div>
            </div>

                {/* ANIMALS ROW */}

                <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 inline-flex">Meet The Animals <img className="hover:animation-[DogBounce] h-8 ml-8 w-auto sm:h-10" src={HousePaw}/></h1>
                        <p className="font-normal text-base leading-6 text-gray-600 ">
                        We believe that great web development is about more than just code and design; it's about creating meaningful experiences for users.
                        </p>
                        <br />
                        <p className="font-normal text-base leading-6 text-gray-600 ">
                        If you're looking for a web development team that is dedicated, knowledgeable, and passionate about delivering the best possible results, look no further than Cadogy.
                        </p>
                    </div>

                    <div className="w-full lg:w-8/12 lg:pt-8 rounded-2xl">
                        <div className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 lg:gap-4 shadow-lg rounded-2xl">
                        {/* ANIMAL DATA */}
                        {officeAnimals.map((officeAnimal) => (
                        <div className="p-4 pb-6 flex justify-center flex-col items-center">
                                <img className="rounded-2xl md:block hidden" src={officeAnimal.animalImage} alt={officeAnimal.animalName} />
                                <img className="rounded-2xl md:hidden block" src={officeAnimal.animalImage} alt={officeAnimal.animalName} />
                                <p className="font-bold text-xl leading-5 text-gray-800 mt-4">{officeAnimal.animalName}</p>
                                <p className="font-normal text-md leading-5 text-gray-800 mt-4"><b>Favorite Toy:</b> {officeAnimal.favoriteToy}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Story;
