export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Selam NGO</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our mission, vision, and values that drive our commitment to humanitarian aid and sustainable development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At Selam NGO, our mission is to empower underserved communities by providing essential resources, education, and healthcare services. We believe in fostering sustainable development that enables communities to thrive independently.
            </p>
            <p className="text-gray-700 mb-4">
              Through collaborative partnerships with local organizations and dedicated volunteers, we work tirelessly to address immediate needs while building long-term solutions that create lasting impact.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              We envision a world where every individual, regardless of their circumstances, has access to basic necessities, education, and opportunities for personal and community growth.
            </p>
            <p className="text-gray-700 mb-4">
              Our vision is rooted in the belief that sustainable change comes from empowering communities to become self-reliant and resilient.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="text-blue-900 text-4xl mb-4"> Integrity</div>
              <p className="text-gray-700">
                We conduct all our activities with honesty, transparency, and accountability to our beneficiaries, donors, and partners.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="text-green-700 text-4xl mb-4">Compassion</div>
              <p className="text-gray-700">
                We approach every situation with empathy and kindness, recognizing the dignity and worth of every individual we serve.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-8 rounded-lg">
              <div className="text-yellow-700 text-4xl mb-4">Collaboration</div>
              <p className="text-gray-700">
                We believe in the power of partnership and work closely with local communities, organizations, and stakeholders to achieve our goals.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
          <p className="text-gray-700 mb-4">
            Selam NGO takes a holistic approach to development, focusing on both immediate relief and long-term sustainability. We work directly with communities to identify their needs and co-create solutions that are culturally appropriate and environmentally sustainable.
          </p>
          <p className="text-gray-700">
            Our programs are designed to build local capacity, promote self-reliance, and create positive ripple effects that extend beyond our direct beneficiaries. We measure our success not just by the number of people we reach, but by the lasting impact we create.
          </p>
        </div>
      </div>
    </div>
  );
}