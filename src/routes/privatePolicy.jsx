import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">개인정보처리방침</h1>

      <p className="mb-4">
        본 웹사이트는 일반적인 이용자의 개인정보를 수집하지 않습니다. 다만, 관리자 페이지 접근 시 다음과 같은 개인정보가 수집될 수 있습니다.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. 수집하는 개인정보 항목</h2>
      <ul className="list-disc list-inside mb-4">
        <li>관리자 페이지 로그인 시도 시 IP 주소</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. 개인정보의 수집 및 이용 목적</h2>
      <p className="mb-4">
        수집된 IP 주소는 관리자 페이지에 대한 비인가 접근 탐지를 위한 보안 목적으로 사용됩니다.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. 개인정보의 보유 및 이용기간</h2>
      <p className="mb-4">
        수집된 IP 정보는 최대 1년간 보관되며, 이후 자동으로 파기됩니다.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. 개인정보 제3자 제공</h2>
      <p className="mb-4">
        본 웹사이트는 개인정보를 제3자에게 제공하지 않습니다.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. 쿠키(Cookie)의 사용</h2>
      <p className="mb-4">
        본 웹사이트는 기본적으로 쿠키를 사용하지 않으며, <strong>관리자 페이지 로그인</strong> 기능에 한하여 인증 정보를 저장하기 위한 쿠키를 사용합니다.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. 외부 서비스 연동</h2>
      <p className="mb-4">
        본 웹사이트는 Google Analytics, Facebook, 기타 외부 서비스를 연동하지 않으며, 이로 인해 개인정보가 수집되지 않습니다.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. 문의처</h2>
      <p className="mb-2">본 방침에 대한 문의는 아래 이메일로 연락주시기 바랍니다.</p>
      <p className="mb-4">이메일: your@email.com</p>

      <p className="text-sm text-gray-600">본 방침은 2025년 5월 8일부터 시행됩니다.</p>
    </div>
  );
};

export default PrivacyPolicy;