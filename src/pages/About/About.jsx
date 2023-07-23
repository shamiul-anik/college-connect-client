import { Accordion } from 'flowbite-react';
import FAQsImage from '../../assets/images/faqs.jpg'
import { Link } from 'react-router-dom';
import CommonBanner from '../../components/CommonBanner';
import ReactHelmet from '../../components/reactHelmet';

const About = () => {

	return (
		<div>

			<ReactHelmet documentTitle="Language School | About" metaDescription="About"></ReactHelmet>

			{/* About Us Banner */}
			<CommonBanner bannerHeading="About Us"></CommonBanner>

			<section className="max-w-7xl mx-auto mt-12 lg:mt-20 p-4 text-slate-700 text-justify">
				<div>
					<header>
						<h2 className="content-title text-center">Interested to Know More About Us?</h2>
					</header>
					<p className="content-description text-center mb-8">
						Check for finding out more information!
					</p>
				</div>
				<div>
					<div className='border-2 border-slate-200 rounded-xl p-4 md:p-8 shadow-lg'>
						<header>
							<h3 className='text-lg md:text-xl'>Welcome to <span className='font-bold text-teal-600'>Language School</span>!</h3>
						</header>
						<div className='text-sm md:text-base'>
							<p className='mt-4'>At Language School, we believe that language learning should be an exciting and immersive experience. We are dedicated to providing high-quality language education that fosters communication skills, cultural understanding, and a lifelong passion for languages.</p>
							<p className='mt-4'>Our mission is to empower learners of all ages to confidently navigate the world through language. We offer a diverse range of language programs carefully crafted to cater to different learning styles and proficiency levels. Whether you're a beginner or looking to enhance your existing language skills, we have the perfect program to suit your needs.</p>
							<p className='mt-4'>What sets Language School apart is our commitment to excellence and educational value. We carefully select experienced language instructors who are passionate about teaching and creating engaging learning environments. Our curriculum is designed to be interactive, dynamic, and tailored to each learner's specific goals and interests.</p>
							<p className='mt-4'>We understand that language learning goes beyond textbooks and grammar exercises. That's why our approach integrates cultural elements, real-life scenarios, and practical communication skills. By immersing yourself in our language programs, you'll not only develop language proficiency but also gain a deeper appreciation for the rich diversity of cultures around the world.</p>
							<p className='mt-4'>At Language School, we prioritize the success and satisfaction of our students. Our friendly and knowledgeable team is here to support you every step of the way, providing guidance, resources, and personalized attention to ensure your language learning journey is rewarding and enjoyable.</p>
							<p className='mt-4'>Join us on this linguistic adventure and unlock the doors to global communication. Explore our range of language programs today and embark on a transformative learning experience.</p>
							<p className='mt-4'>Discover, learn, and communicate with Language School - Where Language Education Comes to Life!</p>
						</div>
					</div>
				</div>

				<div className='mt-16 md:mt-24'>
					<header>
						<h2 className="content-title text-center">Frequently Asked Questions (FAQs)</h2>
					</header>
					<p className="content-description text-center mb-10">
						Are you looking for some answers? Check for finding out more information!
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-4 items-center mb-4">
					<Accordion className='col-span-1 md:col-span-3 w-full max-w-7xl mx-auto mb-4 md:mb-8 border-2 border-slate-200'>
						<Accordion.Panel>
							<Accordion.Title>
								What languages do you offer at Language School?
							</Accordion.Title>
							<Accordion.Content className='border-b-2 border-teal-200'>
								<p className="mb-2 text-gray-500 text-sm md:text-base dark:text-gray-400">
									At Language School, we offer a wide range of language programs. Currently, we provide courses in Arabic, English, Spanish, French, German, Italian, Mandarin Chinese, and Japanese. We are constantly expanding our language offerings based on the interests and needs of our students.
								</p>
							</Accordion.Content>
						</Accordion.Panel>
						<Accordion.Panel>
							<Accordion.Title>
								How do I determine my language proficiency level?
							</Accordion.Title>
							<Accordion.Content className='border-b-2 border-teal-200'>
								<p className="mb-2 text-gray-500 text-sm md:text-base dark:text-gray-400">
									We conduct a placement test for new students to assess their language proficiency level. The test helps us understand your current skills and place you in the appropriate course. Our experienced instructors also provide guidance and recommendations based on your goals and abilities.
								</p>
							</Accordion.Content>
						</Accordion.Panel>
						<Accordion.Panel>
							<Accordion.Title>
								What is the class size at Language School?
							</Accordion.Title>
							<Accordion.Content className='border-b-2 border-teal-200'>
								<p className="mb-2 text-gray-500 text-sm md:text-base dark:text-gray-400">
									We believe in personalized attention and interactive learning experiences. Therefore, we keep our class sizes small to ensure each student receives ample opportunity to practice and engage with the language. On average, our classes have around 8-12 students, allowing for a conducive learning environment.
								</p>
							</Accordion.Content>
						</Accordion.Panel>
						<Accordion.Panel>
							<Accordion.Title>
								What teaching methods and materials do you use?
							</Accordion.Title>
							<Accordion.Content className='border-b-2 border-teal-200'>
								<p className="mb-2 text-gray-500 text-sm md:text-base dark:text-gray-400">
									We utilize a communicative approach that focuses on practical language skills. Our instructors employ a variety of teaching methods, including interactive activities, role-plays, group discussions, multimedia resources, and real-life scenarios. We also incorporate authentic materials, such as news articles, videos, and cultural content, to make the learning experience more engaging and relevant.
								</p>
							</Accordion.Content>
						</Accordion.Panel>
						<Accordion.Panel>
							<Accordion.Title>
								Can I join a course if I have no prior knowledge of the language?
							</Accordion.Title>
							<Accordion.Content className='border-b-2 border-teal-200'>
								<p className="mb-2 text-gray-500 text-sm md:text-base dark:text-gray-400">
									Absolutely! We offer beginner-level courses for individuals with no prior knowledge of the language. Our instructors are trained to provide a solid foundation and guide you through the learning process step by step. Whether you are a complete beginner or have some basic familiarity, we have courses suitable for your needs.
								</p>
							</Accordion.Content>
						</Accordion.Panel>
						<Accordion.Panel>
							<Accordion.Title>
								What are the course durations and schedules?
							</Accordion.Title>
							<Accordion.Content className='border-b-2 border-teal-200'>
								<p className="mb-2 text-gray-500 text-sm md:text-base dark:text-gray-400">
									Course durations and schedules may vary depending on the language and level. Our courses typically range from 8 to 12 weeks, with classes held once or twice a week. We offer both daytime and evening classes to accommodate different schedules. You can check our course catalog or contact our admissions team for specific information about the language and level you're interested in.
								</p>
							</Accordion.Content>
						</Accordion.Panel>
						<Accordion.Panel>
							<Accordion.Title>
								Is there any opportunity for cultural immersion or conversation practice?
							</Accordion.Title>
							<Accordion.Content className='border-b-2 border-teal-200'>
								<p className="mb-2 text-gray-500 text-sm md:text-base dark:text-gray-400">
									Yes! We believe that cultural immersion and conversation practice are crucial components of language learning. Apart from classroom activities, we organize cultural events, language exchange programs, and conversation clubs where students can practice their language skills with native speakers and fellow learners. These opportunities provide valuable real-world practice and foster a deeper understanding of the language and culture.
								</p>
							</Accordion.Content>
						</Accordion.Panel>
						<Accordion.Panel>
							<Accordion.Title>
								Do you provide any certification upon course completion?
							</Accordion.Title>
							<Accordion.Content className='border-b-2 border-teal-200'>
								<p className="mb-2 text-gray-500 text-sm md:text-base dark:text-gray-400">
									Yes, we provide a certificate of completion to students who successfully finish their language course at our school. This certificate showcases your dedication to language learning and can be a valuable addition to your resume or educational portfolio.
								</p>
							</Accordion.Content>
						</Accordion.Panel>
					</Accordion>
					<div className='col-span-2'>
						<img className="w-full min-w-[350px]" src={FAQsImage} alt="FAQs Image" />
					</div>
				</div>
				<div>
					If you have any other questions or need further information, please feel free to&nbsp;
					<Link
						to="/contact"
						rel="nofollow"
						className="text-teal-600 hover:underline dark:text-teal-500 font-semibold"
					>contact
					</Link> our friendly staff. We are here to assist you on your language learning journey!
				</div>
			</section>
		</div>
	);
};

export default About;