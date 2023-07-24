import { useContext, useEffect, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import UserImage from '../../../assets/images/user.png'
import { toast } from 'react-toastify';
import ReactHelmet from '../../../components/reactHelmet';
import { updateUser } from '../../../api/auth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Profile = () => {

  const navigate = useNavigate();

  const { user, loading, userRole, setLoading } = useContext(AuthContext);

  const currentUserName = user?.displayName;
  const currentUserPhotoURL = user?.photoURL;
  const currentUserEmail = user?.email;

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { data: userData = [], refetch } = useQuery({
    queryKey: ["userData", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/user/${user?.email}`);
      setLoading(false);
      // console.log("User Data: ", res?.data);
      return res?.data;
    },
  });

  const handleProfileUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value; 
    const university = form.university.value; 
    const address = form.address.value; 
    const photoURL = form.photoURL.value;
 
    setSuccess("");
    setError("");
    
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL
    }).then(() => {
      console.log("Profile updated!");
      const userInfo = {
        name: name,
        email: currentUserEmail,
        university: university,
        address: address,
        photoURL: photoURL
      }
      // console.log(userInfo);
      updateUser(userInfo);
      refetch();
      setSuccess("Profile updated!");
      toast.success("Profile updated!");
      setLoading(false);
      form.reset();
      navigate("/profile");
    }).catch((error) => {
      refetch();
      setError(error.message);
      toast.error("Something went wrong!");
      setLoading(false);
    });

  };

  return (
    <section className="max-w-4xl mx-auto mt-4 lg:mt-20 p-4">

      <ReactHelmet documentTitle="College Connect | Profile" metaDescription="Profile"></ReactHelmet>

      <div className="flex card card-compact w-full bg-base-100 shadow-xl border-2 border-teal-400">

        <div className="flex-1 p-6 md:p-8 pt-5 pb-1 md:pb-2">
          <h3 className='text-slate-700 text-3xl my-2 font-bold text-center'>Profile</h3>
        </div>

        <div className="mx-auto my-2 w-24 aspect-square rounded-full ring-2 ring-offset-2 ring-teal-400">
          <img className='rounded-full aspect-square object-cover object-top' src={currentUserPhotoURL ? currentUserPhotoURL : UserImage} alt={currentUserName} />
        </div>
        <div className="flex-1 mt-2">
          <h4 className='text-slate-700 text-2xl my-2 font-bold text-center'>{currentUserName ? currentUserName : "Welcome, User!"}</h4>
          <p className='text-slate-600 text-md mt-2 mb-3 font-medium text-center'>{currentUserEmail}</p>
          {
            userRole && <p className="uppercase px-5 py-1 bg-teal-300 w-fit mx-auto rounded-xl">{userRole}</p>
          }
        </div>

        <div className='border-t border-slate-300 my-4 mx-6 md:mx-8'></div>

        <p className="!px-6 md:!px-8 text-green-600 mt-2 text-center">{success}</p>
        <p className="!px-6 md:!px-8 text-red-500 mt-2 text-center">{error}</p>

        <form onSubmit={handleProfileUpdate}>
          <div className="!px-6 md:!px-8 !pt-2 card-body mb-6 md:mb-8">
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="form-control">
                <label className="label pl-0" htmlFor="name">
                  <span className="label-text text-lg">Name</span>
                </label>
                <input type="text" id="name" name="name" placeholder="Enter your name" className="input input-bordered input-accent focus:ring-0 focus:border-teal-500 read-only:bg-slate-100" defaultValue={currentUserName} />
                <p className="text-red-500 mt-2"></p>
              </div>
              <div className="form-control">
                <label className="label pl-0" htmlFor="email">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input type="text" id="email" name="email" placeholder="Enter your email" className="input input-bordered input-accent focus:ring-0 focus:border-teal-500 read-only:bg-slate-100" defaultValue={currentUserEmail} />
                <p className="text-red-500 mt-2"></p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="form-control">
                <label className="label pl-0" htmlFor="university">
                  <span className="label-text text-lg">University</span>
                </label>
                <input type="text" id="university" name="university" placeholder="Enter your university name" className="input input-bordered input-accent focus:ring-0 focus:border-teal-500 read-only:bg-slate-100" defaultValue={userData.university} />
                <p className="text-red-500 mt-2"></p>
              </div>
              <div className="form-control">
                <label className="label pl-0" htmlFor="address">
                  <span className="label-text text-lg">Address</span>
                </label>
                <input type="text" id="address" name="address" placeholder="Enter your address" className="input input-bordered input-accent focus:ring-0 focus:border-teal-500 read-only:bg-slate-100" defaultValue={userData.address} />
                <p className="text-red-500 mt-2"></p>
              </div>
            </div>

            <div className="form-control">
              <label className="label pl-0" htmlFor="photoURL">
                <span className="label-text text-lg">Photo URL</span>
              </label>
              <input type="text" id="photoURL" name="photoURL" placeholder="Enter your photo url" className="input input-bordered input-accent focus:ring-0 focus:border-teal-500 read-only:bg-slate-100" defaultValue={currentUserPhotoURL ? currentUserPhotoURL : ""} />
              <p className="text-red-500 mt-2"></p>
            </div>

            <div className="form-control mt-4">
              {/* <button className="btn text-lg" type="submit">Update</button> */}
              <button type="submit" className="text-white bg-gradient-to-br from-teal-500 to-teal-600 ring-2 ring-offset-1 ring-teal-500 transition-all hover:duration-300 hover:from-teal-600 hover:to-teal-700 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-200 dark:focus:ring-teal-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center">Update</button>
            </div>
          </div>
        </form>
        
      </div>
    </section>
  );
};

export default Profile;