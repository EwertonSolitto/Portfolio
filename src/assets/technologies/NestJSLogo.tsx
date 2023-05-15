import ImageSize from "../../types/ImageSize";

export default function NestJSLogo(props: ImageSize) {
  return(
    <svg width={props.width} height={props.height} viewBox={`0 0 ${props.width} ${props.height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M31.2956 0.86264C30.9263 0.86264 30.5834 0.941525 30.2669 1.0467C30.9395 1.4937 31.3088 2.08532 31.4934 2.75581C31.5066 2.84784 31.533 2.91358 31.5462 3.0056C31.5594 3.08449 31.5725 3.16337 31.5725 3.24225C31.6253 4.39919 31.2692 4.5438 31.0186 5.22745C30.6361 6.1083 30.7417 7.05488 31.2033 7.81741C31.2428 7.90944 31.2956 8.01461 31.3615 8.10664C30.8603 4.78045 33.6431 4.28086 34.1575 3.24225C34.197 2.33511 33.4453 1.73034 32.8518 1.30964C32.2847 0.967817 31.7704 0.86264 31.2956 0.86264ZM35.4895 1.61202C35.4367 1.9144 35.4763 1.83552 35.4632 1.99328C35.4499 2.09846 35.4499 2.22993 35.4368 2.33511C35.4104 2.44028 35.384 2.54546 35.3445 2.65064C35.3181 2.75581 35.2785 2.86099 35.239 2.96616C35.1862 3.07134 35.1466 3.16337 35.0939 3.26854C35.0543 3.32115 35.028 3.37372 34.9884 3.42631C34.962 3.46575 34.9356 3.50519 34.9093 3.54463C34.8433 3.63666 34.7774 3.72869 34.7114 3.80757C34.6323 3.88646 34.5664 3.97848 34.474 4.04422C34.474 4.05738 34.474 4.05738 34.474 4.05738C34.3949 4.12312 34.3158 4.202 34.2235 4.26773C33.9465 4.47808 33.63 4.63585 33.3398 4.83306C33.2475 4.89879 33.1552 4.95138 33.0761 5.03026C32.9837 5.096 32.9046 5.16173 32.8255 5.24061C32.7332 5.31949 32.6672 5.39838 32.5881 5.49041C32.5221 5.56929 32.443 5.66132 32.3903 5.75335C32.3243 5.84538 32.2584 5.93741 32.2056 6.02943C32.1528 6.13461 32.1133 6.22664 32.0605 6.33181C32.021 6.43699 31.9814 6.52902 31.955 6.63419C31.9155 6.75252 31.8891 6.8577 31.8627 6.96287C31.8495 7.01548 31.8495 7.08119 31.8364 7.13378C31.8231 7.18639 31.8231 7.23896 31.81 7.29155C31.81 7.39672 31.7968 7.51505 31.7968 7.62022C31.7968 7.6991 31.7968 7.77799 31.81 7.85687C31.81 7.96204 31.8232 8.06722 31.8496 8.18554C31.8628 8.29072 31.8891 8.39589 31.9155 8.50108C31.9551 8.60625 31.9815 8.71142 32.021 8.8166C32.0474 8.88234 32.087 8.94807 32.1133 9.00066L29.08 7.83057C28.5656 7.68596 28.0645 7.55449 27.5501 7.43616C27.2732 7.37043 26.9962 7.30469 26.7193 7.23896C25.9279 7.0812 25.1235 6.96288 24.319 6.88399C24.2926 6.88399 24.2794 6.87083 24.253 6.87083C23.4617 6.79195 22.6836 6.75251 21.8923 6.75251C21.312 6.75251 20.7317 6.77878 20.1646 6.81824C19.3601 6.87085 18.5556 6.97601 17.7511 7.10747C17.5533 7.13375 17.3554 7.17321 17.1576 7.21265C16.7488 7.29153 16.3531 7.38356 15.9706 7.47559C15.7728 7.5282 15.575 7.58077 15.3772 7.63335C15.1793 7.71223 14.9947 7.80427 14.8101 7.88315C14.665 7.94888 14.5199 8.01462 14.3748 8.08035C14.3485 8.09352 14.3221 8.09352 14.3089 8.10663C14.177 8.17236 14.0583 8.22495 13.9396 8.29069C13.9001 8.30385 13.8737 8.31696 13.8473 8.33013C13.7022 8.39586 13.5572 8.47474 13.4385 8.54048C13.3461 8.57992 13.2538 8.63251 13.1747 8.67195C13.1351 8.69822 13.0824 8.72456 13.056 8.73768C12.9373 8.80342 12.8186 8.86915 12.7131 8.93489C12.5944 9.00062 12.4889 9.06636 12.3966 9.13209C12.3043 9.19783 12.2119 9.25041 12.1328 9.31615C12.1196 9.32931 12.1064 9.32931 12.0932 9.34242C12.0141 9.39503 11.9218 9.46074 11.8427 9.52649C11.8427 9.52649 11.8294 9.53965 11.8163 9.55276C11.7504 9.60537 11.6844 9.65793 11.6185 9.71052C11.5921 9.72368 11.5657 9.74996 11.5393 9.76313C11.4734 9.81574 11.4075 9.88145 11.3415 9.93404C11.3283 9.96032 11.3019 9.97348 11.2887 9.98665C11.2096 10.0655 11.1305 10.1313 11.0513 10.2101C11.0381 10.2101 11.0381 10.2233 11.025 10.2364C10.9459 10.3022 10.8667 10.381 10.7876 10.4599C10.7744 10.4731 10.7744 10.4862 10.7612 10.4862C10.6953 10.5519 10.6294 10.6177 10.5634 10.6965C10.5371 10.7228 10.4975 10.7492 10.4711 10.7754C10.4052 10.8543 10.326 10.9332 10.2469 11.0121C10.2337 11.0383 10.2073 11.0515 10.1941 11.0778C10.0886 11.183 9.99629 11.2882 9.89078 11.3933C9.87757 11.4065 9.86442 11.4196 9.85122 11.4328C9.6402 11.6563 9.41599 11.8798 9.1786 12.077C8.94121 12.2873 8.69063 12.4845 8.44005 12.6554C8.17628 12.8395 7.9257 12.9973 7.64874 13.155C7.38497 13.2996 7.10801 13.4311 6.81786 13.5494C6.5409 13.6678 6.25076 13.773 5.96062 13.865C5.4067 13.9833 4.83959 14.2068 4.35162 14.2462C4.24611 14.2462 4.12741 14.2725 4.02191 14.2857C3.90321 14.312 3.7977 14.3383 3.6922 14.3646C3.58669 14.404 3.48118 14.4434 3.37567 14.4829C3.27017 14.5223 3.16466 14.5749 3.05915 14.6275C2.96683 14.6932 2.86132 14.7458 2.769 14.8116C2.67669 14.8773 2.58436 14.9562 2.50523 15.0351C2.41292 15.1008 2.32059 15.1928 2.24146 15.2717C2.16233 15.3637 2.0832 15.4426 2.01726 15.5346C1.95132 15.6398 1.87219 15.7319 1.81943 15.837C1.75349 15.9291 1.68755 16.0342 1.63479 16.1394C1.58202 16.2577 1.52929 16.3629 1.48972 16.4812C1.45015 16.5864 1.41059 16.7047 1.37102 16.8231C1.34467 16.9282 1.31825 17.0334 1.30508 17.1386C1.30508 17.1518 1.29187 17.1649 1.29187 17.178C1.26552 17.2963 1.26552 17.4541 1.25231 17.533C1.2391 17.625 1.22595 17.7039 1.22595 17.7959C1.22595 17.8485 1.22595 17.9143 1.23916 17.9668C1.25237 18.0589 1.26552 18.1378 1.29194 18.2166C1.31829 18.2955 1.34471 18.3744 1.38425 18.4533C1.38425 18.4664 1.38425 18.4665 1.38425 18.4665C1.42382 18.5453 1.47657 18.6242 1.52932 18.7031C1.5821 18.782 1.63484 18.8609 1.70078 18.9398C1.76672 19.0055 1.84585 19.0844 1.92498 19.1501C2.00411 19.229 2.08324 19.2947 2.17556 19.3604C2.49209 19.6365 2.57122 19.7286 2.98006 19.9389C3.046 19.9784 3.11195 20.0047 3.19108 20.0441C3.20429 20.0441 3.21743 20.0573 3.23064 20.0573C3.23064 20.0835 3.23064 20.0967 3.24385 20.123C3.25706 20.2282 3.28342 20.3333 3.3098 20.4385C3.33615 20.5569 3.37574 20.662 3.41531 20.7541C3.45487 20.8329 3.48125 20.9118 3.52081 20.9907C3.53402 21.017 3.54717 21.0433 3.56038 21.0564C3.61316 21.1616 3.66589 21.2537 3.71864 21.3457C3.78458 21.4377 3.85052 21.5297 3.91647 21.6218C3.98241 21.7006 4.06154 21.7927 4.14067 21.8716C4.2198 21.9504 4.29893 22.0162 4.39125 22.095C4.39125 22.095 4.40447 22.1082 4.41761 22.1082C4.49674 22.174 4.57587 22.2397 4.655 22.2923C4.74732 22.358 4.83964 22.4106 4.94515 22.4632C5.03747 22.5158 5.14298 22.5684 5.24848 22.6078C5.32762 22.6473 5.41993 22.6736 5.51225 22.6998C5.52546 22.713 5.53861 22.713 5.56503 22.7261C5.6178 22.7393 5.68372 22.7524 5.73648 22.7656C5.69691 23.4755 5.6837 24.146 5.78925 24.3826C5.90794 24.6456 6.48824 23.8436 7.06853 22.9233C6.9894 23.8305 6.93664 24.8954 7.06853 25.2109C7.2136 25.5396 8.00491 24.5141 8.69071 23.3835C18.0413 21.2274 26.5743 27.6694 27.4711 36.7671C27.2997 35.3472 25.5456 34.5584 24.7411 34.7556C24.3454 35.7285 23.6728 36.9775 22.5914 37.7532C22.6837 36.8854 22.6441 35.9915 22.4595 35.1237C22.1693 36.3333 21.6022 37.4639 20.8241 38.4368C19.5712 38.5288 18.3183 37.9241 17.6589 37.0169C17.6061 36.9775 17.5929 36.8986 17.5534 36.846C17.5138 36.754 17.4742 36.662 17.4479 36.5699C17.4083 36.4779 17.3819 36.3859 17.3687 36.2938C17.3555 36.2018 17.3555 36.1098 17.3555 36.0046C17.3555 35.9389 17.3555 35.8731 17.3555 35.8074C17.3687 35.7154 17.3951 35.6233 17.4215 35.5313C17.4478 35.4393 17.4742 35.3472 17.5138 35.2552C17.5666 35.1632 17.6061 35.0712 17.672 34.9791C17.8962 34.3481 17.8962 33.8353 17.4874 33.533C17.4083 33.4804 17.3291 33.4409 17.2368 33.4015C17.184 33.3883 17.1181 33.362 17.0654 33.3489C17.0258 33.3357 16.9994 33.3226 16.9599 33.3094C16.8675 33.2832 16.7752 33.2568 16.6829 33.2437C16.5906 33.2174 16.4983 33.2043 16.4059 33.2043C16.3136 33.1911 16.2081 33.178 16.1158 33.178C16.0499 33.178 15.9839 33.1912 15.918 33.1912C15.8125 33.1912 15.7201 33.2043 15.6278 33.2306C15.5355 33.2438 15.4432 33.2569 15.3509 33.2832C15.2586 33.3095 15.1662 33.3358 15.0739 33.3752C14.9816 33.4147 14.9025 33.4541 14.8101 33.4936C14.731 33.533 14.6519 33.5856 14.5596 33.625C11.4866 35.6234 13.3198 40.3037 15.4168 41.6578C14.6255 41.8025 13.821 41.9734 13.5968 42.1443C13.5836 42.1575 13.5704 42.1706 13.5704 42.1706C14.1376 42.5124 14.731 42.8016 15.3509 43.0514C16.195 43.3275 17.0918 43.5773 17.4874 43.6825V43.6956C18.5821 43.9191 19.6899 43.998 20.8109 43.9323C26.6534 43.5247 31.4408 39.0942 32.3113 33.2569C32.3376 33.3752 32.364 33.4804 32.3904 33.5987C32.43 33.8354 32.4827 34.0852 32.5091 34.335C32.5091 34.335 32.5091 34.335 32.5091 34.3481C32.5354 34.4665 32.5487 34.5848 32.5619 34.69C32.5619 34.7162 32.5619 34.7294 32.5619 34.7426C32.5751 34.8609 32.5882 34.9792 32.5882 35.0844C32.6014 35.229 32.6146 35.3736 32.6146 35.5183C32.6146 35.584 32.6146 35.6497 32.6146 35.7286C32.6146 35.7943 32.6278 35.8732 32.6278 35.939C32.6278 36.0178 32.6146 36.0967 32.6146 36.1756C32.6146 36.2413 32.6146 36.3071 32.6146 36.3597C32.6146 36.4517 32.6014 36.5306 32.6014 36.6226C32.6014 36.6752 32.6014 36.7278 32.5882 36.7935C32.5882 36.8855 32.575 36.9776 32.575 37.0827C32.5617 37.1222 32.5617 37.1616 32.5617 37.2011C32.5485 37.3062 32.5354 37.3983 32.5222 37.5035C32.5222 37.5429 32.5222 37.5823 32.509 37.6218C32.4957 37.7532 32.4694 37.8716 32.4562 38.003V38.0162V38.0294C32.4298 38.1477 32.4034 38.2792 32.377 38.3975C32.377 38.4107 32.377 38.4238 32.377 38.4369C32.3507 38.5553 32.3243 38.6736 32.2979 38.7919C32.2979 38.8051 32.2847 38.8313 32.2847 38.8445C32.2584 38.9628 32.2319 39.0812 32.1924 39.1995C32.1924 39.2127 32.1924 39.2258 32.1924 39.2389C32.1528 39.3704 32.1133 39.4887 32.0869 39.607C32.0737 39.6202 32.0737 39.6333 32.0737 39.6333C32.0341 39.7648 31.9946 39.8963 31.955 40.0277C31.9022 40.1592 31.8627 40.2775 31.8099 40.409C31.7571 40.5405 31.7176 40.6719 31.6648 40.7902C31.6121 40.9217 31.5593 41.0401 31.5066 41.1715H31.4934C31.4406 41.2898 31.3878 41.4213 31.3219 41.5396C31.3087 41.5791 31.2955 41.6054 31.2823 41.6317C31.2691 41.6448 31.2691 41.6579 31.256 41.6711C30.3987 43.3934 29.1326 44.9053 27.55 46.0885C27.4445 46.1542 27.339 46.2331 27.2335 46.312C27.2071 46.3383 27.1676 46.3514 27.1412 46.3777C27.0489 46.4435 26.9565 46.5092 26.851 46.5749L26.8906 46.6538H26.9038C27.0884 46.6275 27.2731 46.6012 27.4577 46.5749H27.4709C27.8138 46.5223 28.1567 46.4566 28.4996 46.3909C28.5919 46.3777 28.6975 46.3514 28.7898 46.3251C28.8557 46.312 28.9085 46.2989 28.9744 46.2857C29.0667 46.2725 29.159 46.2463 29.2514 46.2331C29.3305 46.2068 29.4096 46.1936 29.4888 46.1674C30.8076 45.8518 32.0869 45.418 33.3134 44.9052C31.2165 47.7581 28.4073 50.0589 25.1234 51.5708C26.6401 51.4656 28.1567 51.2158 29.6206 50.7951C34.9356 49.2306 39.4065 45.6678 42.0837 40.8691C41.543 43.9061 40.3297 46.7984 38.5361 49.3226C39.8153 48.4812 40.9891 47.5083 42.0574 46.404C45.0116 43.3276 46.9503 39.4229 47.6097 35.229C48.0581 37.3063 48.19 39.4492 47.9922 41.5659C57.5143 28.3269 48.7835 14.6014 45.1303 10.986C45.1171 10.9597 45.1039 10.9465 45.1039 10.9202C45.0907 10.9334 45.0907 10.9334 45.0907 10.9465C45.0907 10.9333 45.0907 10.9333 45.0775 10.9202C45.0775 11.078 45.0643 11.2357 45.0511 11.3935C45.0116 11.6959 44.972 11.9851 44.9193 12.2744C44.8533 12.5636 44.7742 12.8528 44.6951 13.1421C44.6027 13.4181 44.4972 13.7074 44.3785 13.9835C44.2598 14.2464 44.128 14.5225 43.9829 14.7854C43.8378 15.0352 43.6795 15.2982 43.5081 15.5348C43.3366 15.7846 43.152 16.0213 42.9674 16.2448C42.7695 16.4814 42.5585 16.6918 42.3475 16.9021C42.2156 17.0204 42.0969 17.1256 41.965 17.2308C41.8595 17.3228 41.7672 17.4017 41.6617 17.4937C41.4243 17.6778 41.1869 17.8487 40.9232 18.0065C40.6726 18.1642 40.4088 18.322 40.145 18.4535C39.8681 18.5849 39.5911 18.7032 39.3142 18.8216C39.0372 18.9267 38.7471 19.0188 38.4569 19.0977C38.1668 19.1765 37.8634 19.2423 37.5733 19.2949C37.27 19.3475 36.9666 19.3737 36.6765 19.4C36.4655 19.4132 36.2544 19.4263 36.0434 19.4263C35.7401 19.4263 35.4368 19.4 35.1466 19.3737C34.8433 19.3474 34.5399 19.308 34.2498 19.2422C33.9465 19.1896 33.6563 19.1108 33.3662 19.0187H33.353C33.6431 18.9925 33.9332 18.9661 34.2234 18.9136C34.5267 18.8609 34.8169 18.7952 35.107 18.7163C35.3972 18.6375 35.6873 18.5454 35.9643 18.4403C36.2544 18.3351 36.5314 18.2036 36.7951 18.0721C37.0721 17.9407 37.3227 17.7961 37.5865 17.6383C37.837 17.4674 38.0876 17.2965 38.325 17.1124C38.5624 16.9284 38.7866 16.7312 38.9976 16.5208C39.2218 16.3236 39.4197 16.1001 39.6175 15.8766C39.8153 15.64 39.9999 15.4033 40.1714 15.1667C40.1978 15.1272 40.2242 15.0746 40.2505 15.0352C40.3824 14.8248 40.5143 14.6145 40.633 14.4041C40.7781 14.1412 40.91 13.8782 41.0286 13.6022C41.1473 13.3261 41.2528 13.05 41.3452 12.7608C41.4375 12.4847 41.5034 12.1954 41.5694 11.9062C41.6222 11.6038 41.6749 11.3146 41.7013 11.0254C41.7276 10.723 41.754 10.4206 41.754 10.1314C41.754 9.921 41.7408 9.71065 41.7277 9.5003C41.7013 9.19792 41.6617 8.90868 41.6222 8.61945C41.5694 8.31707 41.5035 8.02784 41.4243 7.7386C41.332 7.46251 41.2397 7.17328 41.1342 6.89719C41.0287 6.6211 40.8968 6.34502 40.7649 6.08207C40.6198 5.81913 40.4748 5.55619 40.3165 5.3064C40.1451 5.05661 39.9736 4.81997 39.789 4.58332C39.5911 4.35982 39.3933 4.13632 39.1823 3.91282C39.0768 3.80765 38.9581 3.68932 38.8394 3.58415C38.2459 3.124 37.6261 2.69015 37.0062 2.29574C36.9139 2.24313 36.8348 2.20371 36.7424 2.16426C36.3072 1.88818 35.8983 1.74349 35.4895 1.61202Z" fill="#E0234E"/>
    </svg>
  )
}
