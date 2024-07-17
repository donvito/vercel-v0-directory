import AuthWrapper from "@/components/AuthWrapper";
import ProductDetailSection from "@/components/ProductDetailSection";
export default async function Home() {

  return (
    <>
      <AuthWrapper>
        <ProductDetailSection />
      </AuthWrapper>
    </>
  );
}
