import React from 'react';
import NavHome from '../components/NavHome';

const TermsOfService = () => {
  return (
    <div>
    <NavHome/>
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="max-w-md w-full mx-auto">
            <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Terms of Service
            </h2>
            </div>
            <div className="mt-8">
            <div className="prose prose-sm text-gray-700">
                <p>
                These Terms of Service ("Terms") govern your use of the Trollz
                website located at trollzstore.com.ng (the "Site") and our mobile
                application (the "App"). Please read these Terms carefully before
                using the Site or App.
                </p>
                <p>
                By accessing or using the Site or App, you agree to be bound by
                these Terms. If you do not agree to these Terms, please do not
                use the Site or App.
                </p>
                <h3>1. Use of the Site and App</h3>
                <p>
                The Site and App are provided for the purpose of browsing and
                purchasing products offered by Trollz. You may use the Site and
                App only for lawful purposes and in accordance with these Terms.
                </p>
                <h3>2. Intellectual Property Rights</h3>
                <p>
                The Site and App and their entire contents, features, and
                functionality (including but not limited to all information,
                software, text, displays, images, video, and audio, and the
                design, selection, and arrangement thereof) are owned by Trollz
                and are protected by Nigerian and international copyright,
                trademark, patent, trade secret, and other intellectual property
                or proprietary rights laws.
                </p>
                <h3>3. Disclaimer of Warranties</h3>
                <p>
                The Site and App are provided on an "as is" and "as available"
                basis, without any warranties of any kind, either express or
                implied. Trollz does not warrant that the Site or App will be
                uninterrupted or error-free, that defects will be corrected, or
                that the Site or App are free of viruses or other harmful
                components.
                </p>
                <h3>4. Limitation of Liability</h3>
                <p>
                In no event will Trollz be liable for any direct, indirect,
                incidental, special, consequential, or punitive damages of any
                kind arising from or in connection with your use of the Site or
                App.
                </p>
                <h3>5. Governing Law</h3>
                <p>
                These Terms are governed by the laws of Nigeria, without regard
                to its conflict of law principles.
                </p>
                <p>
                <em>
                    Last updated: February 20, 2024 ; 12:16 AM
                </em>
                </p>
            </div>
            </div>
        </div>
        </div>
        </div>
        
  );
};

export default TermsOfService;
