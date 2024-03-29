import Container from "../../components/Container";
import DefaultTitle from "../../components/DefaultTitle";

export default function main() {
    return (
        <div className="pt-28 bg-gradient-to-r from-slate-900 to-slate-700">
            <Container className="pb-32">
                <div className="grid md:grid-cols-2 px-10 sm:px-0">
                    <img src="./Code-typing-amico.svg" alt="about photo"
                    className="" />
                    <div className="space-y-4 py-16 sm:px-16">
                        <DefaultTitle name="About Us" />
                        <p className="text-lg text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sint aut? Molestiae molestias, eos magni dicta, vero et architecto corrupti porro eligendi ex quod iusto consequuntur quisquam sapiente. Aperiam, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae officiis, minus blanditiis ullam inventore ad at laborum beatae ratione optio neque voluptate nulla quisquam, maiores fuga possimus vitae consequuntur veritatis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, accusamus? Iste quo natus blanditiis. Ipsam quos et maiores voluptates voluptas. Voluptatum, in? Nisi odio vitae quibusdam temporibus porro cupiditate optio!
                        </p>
                    </div>
                </div>
            </Container>
        </div> 
    )
}